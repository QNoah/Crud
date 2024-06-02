import { ChangeDetectorRef, Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
ingelogd: boolean;

constructor(private router: Router, private cdr: ChangeDetectorRef){}

ngOnInit(): void {
  this.ingelogd = !!localStorage.getItem('token');
}



loguit() {
localStorage.removeItem('token');
this.ingelogd = false;
this.router.navigate(['']);
this.cdr.detectChanges(); // UI-update forceren
}
}
