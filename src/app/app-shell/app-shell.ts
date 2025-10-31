import { Component, computed, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  lucideChevronRight,
  lucideExternalLink,
  lucideSearch,
} from '@ng-icons/lucide';
import { HlmIconImports } from '@try-ng/ui/icon';
import { HlmCardImports } from '@try-ng/ui/card';
import { HlmItemImports } from '@try-ng/ui/item';
import { HlmInputImports } from '@try-ng/ui/input';

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
  ]);

  readonly filteredFeatures = computed(() =>
    this.featuresToTry().filter((feature) =>
      feature.title.toLowerCase().includes(this.search().toLowerCase())
    )
  );
}
