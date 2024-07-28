import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './navbar/sidenav-data';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideNavToggle } from '../../interfaces/sidenav';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgClass,
    SubMenuComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms', style({opacity: 0}))
      ])
    ]),

    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', keyframes([
          style({transform: 'rotate(0deg)', offset: 0}),
          style({transform: 'rotate(2turn)', offset: 1})
        ]))
      ])
    ])
  ]
})

export class SidenavComponent  implements OnInit{
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  protected collapsed: boolean = false;
  protected screenwidth: number = 0;
  protected multiple: boolean = false;

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

  public handlerClick(item: any): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
