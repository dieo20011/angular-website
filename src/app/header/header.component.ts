import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private userService: UserService,){}
  
  isHeaderFixed = false;


  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isHeaderFixed = scrollPosition > 0;
  }

  getUserData() {
    return this.userService.getUser();
  }

  setUserData(user: any) {
    this.userService.setUser(user);
  }
  logout() {
    localStorage.clear();
  }
}
