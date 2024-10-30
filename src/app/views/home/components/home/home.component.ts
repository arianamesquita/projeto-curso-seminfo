import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  funcaoTeste(){
    console.log("testei")
  }

  constructor(private readonly router: Router) { }

  navigateTo(rota: string){
    this.router.navigate([`/${rota}`])
  }

}
