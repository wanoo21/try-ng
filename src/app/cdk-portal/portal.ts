import { NgOptimizedImage } from '@angular/common';
import { Component, Injector, viewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { HlmAvatarImports } from '@try-ng/ui/avatar';
import { HlmCardImports } from '@try-ng/ui/card';
import { HlmEmptyImports } from '@try-ng/ui/empty';
import { HlmNavigationMenuImports } from '@try-ng/ui/navigation-menu';

import { FooterOutlet, HeaderOutlet, SideBarOutlet } from './outlets';
import { links } from './router-alike';

@Component({
  selector: 'app-portal',
  imports: [
    HeaderOutlet,
    SideBarOutlet,
    FooterOutlet,
    HlmEmptyImports,
    HlmNavigationMenuImports,
    HlmCardImports,
    HlmAvatarImports,
    NgOptimizedImage,
  ],
  templateUrl: './portal.html',
  styleUrl: './portal.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'h-screen block content-center',
  },
})
export default class Portal {
  readonly view = viewChild.required('main', { read: ViewContainerRef });
  readonly headerOutlet = viewChild.required(HeaderOutlet);
  readonly sideBarOutlet = viewChild.required(SideBarOutlet);
  readonly footerOutlet = viewChild.required(FooterOutlet);

  readonly pages = links;

  async importPage(event: Event, link: (typeof links)[number]) {
    event.preventDefault();
    const cmp = await link.loadComponent();
    document.startViewTransition(() => {
      this.view().clear();
      this.view().createComponent(cmp.default, {
        injector: Injector.create({
          providers: [
            {
              provide: HeaderOutlet,
              useFactory: () => this.headerOutlet(),
            },
            {
              provide: SideBarOutlet,
              useFactory: () => this.sideBarOutlet(),
            },
            {
              provide: FooterOutlet,
              useFactory: () => this.footerOutlet(),
            },
          ],
        }),
      });
    });
  }

  clearLoadedPage(event: Event) {
    event.preventDefault();
    document.startViewTransition(() => {
      this.view().clear();
      this.headerOutlet().disattachHeader();
      this.sideBarOutlet().disattachSideBar();
      this.footerOutlet().disattachFooter();
    });
  }
}
