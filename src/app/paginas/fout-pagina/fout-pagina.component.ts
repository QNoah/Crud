import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fout-pagina',
  templateUrl: './fout-pagina.component.html',
  styleUrls: ['./fout-pagina.component.scss']
})
export class FoutPaginaComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3500);
  }

}
