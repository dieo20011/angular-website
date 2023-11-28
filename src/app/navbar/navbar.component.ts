import { Component, HostListener } from '@angular/core';
import { FAKE_DATA } from '../data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isNavFixed = false;
  
  listItem: { id: number, img: string, title: string }[] = FAKE_DATA;
  hoveredItem: { id: number, img: string, title: string } | null = null;

  constructor() {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isNavFixed = scrollPosition > 0;
  }
}