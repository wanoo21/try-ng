import { computed, Directive, input } from '@angular/core';
import { HlmSeparator } from '@try-ng/ui/separator';
import { hlm } from '@try-ng/ui/utils';

import type { ClassValue } from 'clsx';

@Directive({
	selector: 'div[hlmSidebarSeparator]',

	hostDirectives: [{ directive: HlmSeparator }],
	host: {
		'data-sidebar': 'separator',
		'[class]': '_computedClass()',
	},
})
export class HlmSidebarSeparator {
	public readonly userClass = input<ClassValue>('', { alias: 'class' });

	protected readonly _computedClass = computed(() => hlm('bg-sidebar-border w-auto', this.userClass()));
}
