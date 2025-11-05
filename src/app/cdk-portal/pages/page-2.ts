import { Component } from '@angular/core';
import { Footer, Header, SideBar } from '../portals';

@Component({
  imports: [Header, SideBar, Footer],
  template: `
    <div class="bg-accent/20" *appHeader>
      <h2>Page 2 Header</h2>
    </div>

    Page 2 works!

    <ng-container *appSideBar>
      <h3>Page 2 SideBar</h3>
    </ng-container>

    <ng-container *appFooter>
      <h4>Page 2 Footer</h4>
    </ng-container>
  `,
  styles: ``,
})
export default class Page2 {}
