import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './navbar/sidenav-data';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SideNavToggle } from '../../interfaces/sidenav';

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
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  protected collapsed: boolean = false;
  protected screenwidth: number = 0;

  protected navData = navbarData;

  public toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenwidth});
  }

  public closeSideNav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenwidth})
  }
}
