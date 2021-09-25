import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {


  items: MenuItem[];
  user: any;

  constructor() { }

  ngOnInit(): void {
    this.createMenu();
  }

  createMenu() {
    // this.user = JSON.parse(localStorage.getItem('user'));
    // if (this.user.message === "employer Logged in")
    this.items = [
      {
        label: 'İş İlanları',
        items: [
          {
            label: 'Tüm İlanlar',
            icon: 'bi bi-clipboard-data',
            routerLink: '/'
          },
          {
            label: 'Aktif İlanlar',
            icon: 'bi bi-lightbulb-fill',
            routerLink: '/job-advertisement-list'         
          },
          {
            label: 'Pasif İlanlar',
            icon: 'bi bi-lightbulb'
          }
        ]
      },
      {
        label: 'İş Arayan',
        items: [
          {
            label: 'Aday Listesi',
            icon: 'bi bi-list-ul',
            routerLink: "/candidate-list"
          }
        ]
      },
      {
        label: 'İşveren',
        items: [
          {
            label: 'Firma Listesi',
            icon: 'bi bi-list-ul',
            routerLink: "/employer-list"
          }
        ]
      },
      {
        label: 'Pozisyonlar',
        items: [
          {
            label: 'Pozisyon Listesi',
            icon: 'bi bi-list-ul',
            routerLink: "/position-list"
          }
        ]
      }
    ]
  }

}
