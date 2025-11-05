import { Component } from '@angular/core';
import { Footer, Header, SideBar } from '../portals';

@Component({
  imports: [Header, SideBar, Footer],
  template: `
    <ng-container *appHeader>
      <h2>Page 3 Header</h2>
    </ng-container>

    Page 3 works!

    <ng-container *appSideBar>
      <h3>Page 3 SideBar</h3>
    </ng-container>

    <ng-container *appFooter>
      <h4>Page 3 Footer</h4>
    </ng-container>
  `,
  styles: ``,
})
export default class Page3 {}
