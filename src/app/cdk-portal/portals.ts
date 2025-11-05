import { CdkPortal } from '@angular/cdk/portal';
import { afterNextRender, Directive, inject } from '@angular/core';
import { FooterOutlet, HeaderOutlet, SideBarOutlet } from './outlets';

@Directive({
  selector: '[appHeader]',
  hostDirectives: [CdkPortal],
})
export class Header {
  readonly portal = inject(CdkPortal);
  readonly #outlet = inject(HeaderOutlet);

  readonly #render = afterNextRender({
    write: () => {
      this.#outlet.attachHeader(this.portal);
    },
  });
}

@Directive({
  selector: '[appFooter]',
  hostDirectives: [CdkPortal],
})
export class Footer {
  readonly portal = inject(CdkPortal);
  readonly outlet = inject(FooterOutlet);

  readonly #render = afterNextRender({
    write: () => {
      this.outlet.attachFooter(this.portal);
    },
  });
}

@Directive({
  selector: '[appSideBar]',
  hostDirectives: [CdkPortal],
})
export class SideBar {
  readonly portal = inject(CdkPortal);
  readonly outlet = inject(SideBarOutlet);

  readonly #render = afterNextRender({
    write: () => {
      this.outlet.attachSideBar(this.portal);
    },
  });
}
