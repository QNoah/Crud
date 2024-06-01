import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uitgelogt',
  templateUrl: './uitgelogt.component.html',
  styleUrls: ['./uitgelogt.component.scss']
})
export class UitgelogtComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3500);
  }

}
