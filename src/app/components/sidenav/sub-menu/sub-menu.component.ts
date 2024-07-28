import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from '../navbar/sidenavLevel';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <ul *ngIf="collapsed && data.items && data.items.length > 0"
      class="sublevel-nav"
    >
      <li *ngFor="let item of data.items" class="siblevel-nav-item">
        <a class="sublevel-nav-link"
          *ngIf="item.items && item.items.length > 0"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{ item.label }}</span>
          <i *ngIf="item.items && collapsed" class="menu-collapsed-icon" [ngClass]="!item.expanded ? 'fal fa-angle-rigth' : 'fal fa-angle-down'" ]></i>
        </a>
        
        <a class="sublevel-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          routerLink="/{{ item.routerlink }}"
          routerLinkActive="active-sublevel"
          [routerLinkActiveOptions]="{exact: true}"
        >
          <i class="sublevel-link-icon fa fa-circle"></i>
          <span class="sublevel-link-text" *ngIf="collapsed">{{ item.label }}</span>
        </a>
        
        <div *ngIf="item.items && item.items.length > 0">
          <app-sub-menu
            [collapsed]="collapsed"]
            [multiple]="multiple"]
            [expanded]="item.expanded"]
          ></app-sub-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrl: '../sidenav.component.scss'
})

export class SubMenuComponent implements OnInit {
  @Input() data: INavbarData = {
    routerlink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed: boolean = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  ngOnInit(): void {
      
  }

  constructor() {}

}
