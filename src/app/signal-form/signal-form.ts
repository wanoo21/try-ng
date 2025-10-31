import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmButton } from '@try-ng/ui/button';
import { HlmCardImports } from '@try-ng/ui/card';
import { HlmCheckboxImports } from '@try-ng/ui/checkbox';
import { HlmFieldImports } from '@try-ng/ui/field';
import { HlmInput } from '@try-ng/ui/input';
import { HlmRadioGroupImports } from '@try-ng/ui/radio-group';
import { HlmSelectImports } from '@try-ng/ui/select';
import { HlmSliderImports } from '@try-ng/ui/slider';
import { HlmTextarea } from '@try-ng/ui/textarea';

/**
 * Related articles and videos:
 *
 * - https://www.angulararchitects.io/en/blog/all-about-angulars-new-signal-forms/
 * - https://medium.com/@schnabelelisa0/angular-signal-forms-the-most-awaited-feature-is-here-161fd722f573
 * - https://www.youtube.com/watch?v=gvL_mTQZIYE
 * - https://next.angular.dev/essentials/signal-forms
 */
@Component({
  imports: [
    HlmInput,
    HlmButton,
    HlmCardImports,
    HlmFieldImports,
    HlmTextarea,
    CurrencyPipe,
    JsonPipe,
    Field,
    BrnSelectImports,
    HlmSelectImports,
    HlmCheckboxImports,
    HlmSliderImports,
    HlmRadioGroupImports,
  ],
  templateUrl: './signal-form.html',
  styles: ``,
})
export default class SignalForm {
  readonly data = signal({
    paymentMethod: {
      nameOnCard: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
    },
    billingAddress: {
      sameAsShippingAddress: true,
      orderComments: '',
      serviceFeedback: '',
    },
    preferences: {
      budgetRange: 500,
      desktopDisplayItems: {
        hardDisks: false,
        externalDisks: false,
        cdsDvdsIpods: false,
        connectedServers: false,
      },
    },
    subscriptionPlan: 'monthly',
  });

  protected readonly myForm = form(this.data, (path) => {
    // required(path.paymentMethod.nameOnCard, {
    //   message: "Please enter the cardholder's full name",
    // });
  });

  async onSubmit(event: Event) {
    event.preventDefault();
    // await submit(this.myForm, async () => {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(null); // No errors mean success
    //     }, 1000);
    //   });
    // });
  }
}
