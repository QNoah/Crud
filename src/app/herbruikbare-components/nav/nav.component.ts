import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  ingelogd: boolean = false;
  private subscription: Subscription;

  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.ontvangInlogstatus().subscribe(status => {
      this.ingelogd = status;
    });
  }

  loguit(): void {
    this.authService.loguit();
    this.router.navigate(['Loguit-succes']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
