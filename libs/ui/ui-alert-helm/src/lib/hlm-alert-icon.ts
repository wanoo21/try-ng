import { Directive } from '@angular/core';
import { provideHlmIconConfig } from '@try-ng/ui/icon';

@Directive({
	selector: '[hlmAlertIcon]',
	providers: [provideHlmIconConfig({ size: 'sm' })],
})
export class HlmAlertIcon {}
