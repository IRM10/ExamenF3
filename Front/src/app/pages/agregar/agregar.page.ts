import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { RestServiceService } from 'src/app/services/rest-service.service';
import Swal from 'sweetalert2'
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  person: Person;

  constructor(public rest: RestServiceService) { 
    this.person = new Person('',null);
  }
  ngOnInit() {

  }
  onSubmit(formularioRegistro:NgForm){
    this.rest.setPerson(this.person).subscribe(res=>{
if(res.message == "Ingrese todos los campos requeridos"  ){
  Swal.fire({
    type: 'error',
    title: 'ERROR!',
    text: 'Ingrese todos los campos!',
  })
}else{
  Swal.fire({
    type: 'success',
    title: 'Se ha Registrado',
    showConfirmButton: false,
    timer: 1500
  })
  this.person.name = "";
  this.person.phone = null;
}
      console.log(res);
    });
   }
   getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  }
}
