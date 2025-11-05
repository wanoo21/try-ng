import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Footer, Header, SideBar } from '../portals';

@Component({
  imports: [Header, SideBar, Footer, NgOptimizedImage],
  template: `
    <div *appHeader>
      <img
        ngSrc="/assets/banner-1.png"
        alt="Page 1 Header"
        fill />
    </div>

    Page 1 works!

    <ng-container *appSideBar>
      <h3>Page 1 SideBar</h3>
    </ng-container>

    <ng-container *appFooter>
      <h4>Page 1 Footer</h4>
    </ng-container>
  `,
  styles: ``,
})
export default class Page1 {}
