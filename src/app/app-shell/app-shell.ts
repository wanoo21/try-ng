import { Component, computed, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  lucideChevronRight,
  lucideExternalLink,
  lucideSearch,
} from '@ng-icons/lucide';
import { HlmCardImports } from '@try-ng/ui/card';
import { HlmIconImports } from '@try-ng/ui/icon';
import { HlmInputImports } from '@try-ng/ui/input';
import { HlmItemImports } from '@try-ng/ui/item';

@Component({
  imports: [HlmCardImports, HlmItemImports, HlmIconImports, HlmInputImports],
  templateUrl: './app-shell.html',
  styles: ``,
  providers: [
    provideIcons({
      lucideChevronRight,
      lucideExternalLink,
      lucideSearch,
    }),
  ],
})
export default class AppShell {
  readonly search = signal('');

  readonly featuresToTry = signal([
    {
      title: 'Signal Form',
      description: 'A form built with Angular Signals.',
      href: '/signal-form',
    },
    {
      title: 'CDK Portal',
      description: 'A demo of Angular CDK Portals.',
      href: '/cdk-portal',
    }
  ]);

  readonly filteredFeatures = computed(() =>
    this.featuresToTry().filter((feature) =>
      feature.title.toLowerCase().includes(this.search().toLowerCase())
    )
  );
}
