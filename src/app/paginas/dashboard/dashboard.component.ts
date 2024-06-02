import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { Data } from 'src/app/modelen/data.model';
import { DataService } from 'src/app/services/data/data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: any;
  volgendeId: number;

  constructor(private dataservice: DataService) {}
  bewerken() {
    console.log('bewerken');
  }
  verwijderOpId(id: number) {
    const bevestigd = confirm('Weet je zeker dat je deze data wilt verwijderen?');
    if (bevestigd) {
      this.dataservice.verwijderOpId(id).subscribe(
        () => {
          this.data = this.data.filter((data) => data.id !== id);
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }
  }
  laadData() {
    this.dataservice
      .laadData()
      .pipe(
        catchError((err) => {
          console.log(err);
          return [];
        })
      )
      .subscribe((data: Data) => {
        console.log(data);
        this.data = data;
        this.berekenVolgendeId();
      });
  }

  ngOnInit() {
    this.laadData();
  }

  berekenVolgendeId(){
    if(this.data.length > 0){
      const hoogsteId = Math.max(...this.data.map(item => item.id));
      this.volgendeId = hoogsteId + 1;
    } else {
      this.volgendeId = 1;
    }
  }
}
