import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/services/rest-service.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  todasLasPersonas:[];

  constructor(public rest: RestServiceService) { 
  }
  ngOnInit() {
    this.getPersons()
  }
  getPersons(){
    this.rest.getPersons().subscribe(res =>{
      console.log(res);
      this.todasLasPersonas = res.todasLasPersonas;
    
    })
  }

}
