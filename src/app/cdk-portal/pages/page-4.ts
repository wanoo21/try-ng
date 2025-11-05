import { Component, signal } from '@angular/core';
import { HlmSlider } from '@try-ng/ui/slider';
import { Footer, Header, SideBar } from '../portals';

@Component({
  imports: [Header, SideBar, Footer, HlmSlider],
  selector: 'app-page-4',
  template: `
    <ng-container *appHeader>
      <h2>Page 4 Header {{ count() }}</h2>
    </ng-container>

    <hlm-slider [(value)]="count" class="w-full" max="1000" />

    <ng-container *appSideBar>
      <h3>Page 4 SideBar {{ count() }}</h3>
    </ng-container>

    <ng-container *appFooter>
      <h4>Page 4 Footer {{ count() }}</h4>
    </ng-container>
  `,
  styles: ``,
  host: {
    class: 'block w-full p-4',
  }
})
export default class Page4 {
  readonly count = signal(0);
}
