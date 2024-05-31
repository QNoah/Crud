import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = Inject(AuthService);
  const router = Inject(Router);

  if(authService.isIngelogd.value){
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
