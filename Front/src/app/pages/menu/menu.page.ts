import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Principal',
      url: '/menu/principal',
      icon: 'home'
    },
    {


        
          title: 'Mis contactos',
          url: '/menu/contactos',
          icon: 'contacts'
        
    
    },


  ]

  constructor() { }

  ngOnInit() {
  }

}
