import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './navbar/sidenav-data';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideNavToggle } from '../../interfaces/sidenav';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgClass
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent  implements OnInit{
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  protected collapsed: boolean = false;
  protected screenwidth: number = 0;

  protected navData = navbarData;

  /* Ajustando o sidenav automaticamente conforme a largura da janela. */
  @HostListener('window:resize', ['$event'])
  onResize(event: any): any {
    this.screenwidth = window.innerWidth;
    if (this.screenwidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenwidth});
    }
  }

  ngOnInit(): void {
    this.screenwidth = window.innerWidth; // Fazendo o tributo `screenWidth receber a largura da janela`
  }

  public toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenwidth});
  }

  public closeSideNav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenwidth})
  }
}
