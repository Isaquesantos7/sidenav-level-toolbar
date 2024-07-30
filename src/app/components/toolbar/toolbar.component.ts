import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    OverlayModule,
    CdkMenuModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})

export class ToolbarComponent implements OnInit {
  @Input() collapsed:boolean = false;
  @Input() screenWidth: number = 0;

  protected canShowSearchAsOverlay: boolean = false;

  constructor () {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  public getHeadClass(): string {
    let styleClass = '';

    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  public checkCanShowSearchAsOverlay(innerWitdh: number): void {
    if (innerWitdh < 845) {
      this.canShowSearchAsOverlay = true;
    } 

    this.canShowSearchAsOverlay = false;
  }
}
