import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
bewerken(){
  console.log("bewerken");
}
verwijderen(){
  console.log("verwijderen");
}
}
