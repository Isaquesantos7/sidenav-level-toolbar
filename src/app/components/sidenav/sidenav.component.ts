import { Component } from '@angular/core';
import { navbarData } from './navbar/sidenav-data';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    NgIf,
    NgClass
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent {
  protected collapsed: boolean = false;
  protected navData = navbarData;

  public toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  public closeSideNav(): void {
    this.collapsed = false;
  }
}
