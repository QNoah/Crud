import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/modelen/data.model';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  data: any = null;
  id: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.haalBestaandeDataOp();
  }

  haalBestaandeDataOp(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService
      .laadDataOpId(this.id)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.data = { id: this.id };
          return of(null); // Gebruik 'of(null)' om een lege observable te retourneren in geval van een fout
        })
      )
      .subscribe((data: any) => {
        if (data !== null) {
          this.data = data;
        }
      });
  }
}
