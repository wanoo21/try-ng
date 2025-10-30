import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { HlmButton } from '@try-ng/ui/button';
import { HlmCardImports } from '@try-ng/ui/card';
import { HlmFieldImports } from '@try-ng/ui/field';
import { HlmInput } from '@try-ng/ui/input';
import { HlmTextarea } from '@try-ng/ui/textarea';

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
