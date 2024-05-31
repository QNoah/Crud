import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
ingelogd: boolean = false;
constructor(private authService: AuthService){}

ngOnInit(): void {
  this.authService.isIngelogd.subscribe(status => {
    this.ingelogd = status;
  });
}

loguit() {
  this.authService.loguit();
}
}
