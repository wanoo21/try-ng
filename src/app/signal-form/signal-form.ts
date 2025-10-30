import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmButton } from '@try-ng/ui/button';
import { HlmCardImports } from '@try-ng/ui/card';
import { HlmCheckboxImports } from '@try-ng/ui/checkbox';
import { HlmFieldImports } from '@try-ng/ui/field';
import { HlmInput } from '@try-ng/ui/input';
import { HlmRadioGroupImports } from '@try-ng/ui/radio-group';
import { HlmSelectImports } from '@try-ng/ui/select';
import { HlmSlider } from '@try-ng/ui/slider';
import { HlmTextarea } from '@try-ng/ui/textarea';

@Component({
  imports: [
    HlmInput,
    HlmButton,
    BrnSelectImports,
    HlmSelectImports,
    HlmCheckboxImports,
    HlmCardImports,
    HlmFieldImports,
    HlmTextarea,
    HlmSlider,
    CurrencyPipe,
    HlmRadioGroupImports,
  ],
  templateUrl: './signal-form.html',
  styles: ``,
})
export default class SignalForm {}
