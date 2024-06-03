import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/modelen/data.model';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  data: any;
  id: number = this.route.snapshot.params['id'];
  dataBestaatNiet: boolean;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.haalBestaandeDataOp();
  }

  haalBestaandeDataOp(): void {
    this.dataService
      .laadDataOpId(this.id)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.dataBestaatNiet = true;
          this.data = { id: this.id };
          return of(null); // Gebruik 'of(null)' om een lege observable te retourneren in geval van een fout
        })
      )
      .subscribe((data: any) => {
        if (data !== null) {
          this.data = data;
          this.dataBestaatNiet = false;
        } else {
          this.dataBestaatNiet = true;
        }
      });
  }

  annuleren(){
    const bevestigd = confirm('Weet je zeker dat je mogelijke wijzigingen wilt negeren en terug wilt gaan naar het dashboard?');
    if(bevestigd){
      this.router.navigate(['Dashboard']);
    }
  }
  verwijderen(){
    const bevestigd = confirm('Weet je zeker dat je deze data wilt verwijderen?');
    if(bevestigd){
      this.dataService.verwijderOpId(this.id).subscribe(() => {
        this.data = this.data.filter((data) => data.id!== this.id);
      },
      (error) => {
        console.log('Error', error);
      }
    );
    }
  }

opslaan(){
  const bevestigd = confirm('Weet je zeker dat je de wijzigingen wilt opslaan?');
  if (bevestigd){
  if (this.dataBestaatNiet === true){
    this.dataService.postData(this.data).subscribe((data) => {
      this.data = data;
      console.log(this.data)
      this.router.navigate(['Dashboard']);
    })
  } else {
    this.dataService.updateData(this.data.id, this.data).subscribe((response: any) => {
      console.log(response);
      console.log('Bestaat al')
      this.router.navigate(['Dashboard']);
    });
  }
}
}
}
