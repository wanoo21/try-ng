import {
  CdkPortal,
  CdkPortalOutlet,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  afterNextRender,
  Directive,
  inject,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHeaderOutlet]',
  hostDirectives: [CdkPortalOutlet],
})
export class HeaderOutlet {
  readonly #view = inject(ViewContainerRef);
  readonly #templateRef = inject(TemplateRef, { optional: true });
  readonly #outlet = inject(CdkPortalOutlet);
  readonly #templatePortal = new TemplatePortal(this.#templateRef, this.#view);

  #render = afterNextRender({
    write: () => {
      this.#attachDefault();
    },
  });

  hasDefault() {
    return this.#templatePortal.isAttached;
  }

  #attachDefault() {
    this.#outlet.attachTemplatePortal(this.#templatePortal);
  }

  attachHeader(portal: CdkPortal) {
    this.#outlet.detach();
    this.#outlet.attach(portal);
  }

  disattachHeader() {
    this.#outlet.detach();
    this.#attachDefault();
  }
}

@Directive({
  selector: '[appFooterOutlet]',
  hostDirectives: [CdkPortalOutlet],
})
export class FooterOutlet {
  readonly #view = inject(ViewContainerRef);
  readonly #templateRef = inject(TemplateRef, { optional: true });
  readonly #outlet = inject(CdkPortalOutlet);
  readonly #templatePortal = new TemplatePortal(this.#templateRef, this.#view);

  #render = afterNextRender({
    write: () => {
      this.#attachDefault();
    },
  });

  hasDefault() {
    return this.#templatePortal.isAttached;
  }

  #attachDefault() {
    this.#outlet.attachTemplatePortal(this.#templatePortal);
  }

  attachFooter(portal: CdkPortal) {
    this.#outlet.detach();
    this.#outlet.attach(portal);
  }

  disattachFooter() {
    this.#outlet.detach();
    this.#attachDefault();
  }
}

@Directive({
  selector: '[appSideBarOutlet]',
  hostDirectives: [CdkPortalOutlet],
})
export class SideBarOutlet {
  readonly #view = inject(ViewContainerRef);
  readonly #templateRef = inject(TemplateRef, { optional: true });
  readonly #outlet = inject(CdkPortalOutlet);
  readonly #templatePortal = new TemplatePortal(this.#templateRef, this.#view);

  #render = afterNextRender({
    write: () => {
      this.#attachDefault();
    },
  });

  hasDefault() {
    return this.#templatePortal.isAttached;
  }

  #attachDefault() {
    this.#outlet.attachTemplatePortal(this.#templatePortal);
  }

  attachSideBar(portal: CdkPortal) {
    this.#outlet.detach();
    this.#outlet.attach(portal);
  }

  disattachSideBar() {
    this.#outlet.detach();
    this.#attachDefault();
  }
}
