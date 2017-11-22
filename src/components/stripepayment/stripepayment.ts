import { Component } from '@angular/core';
import { Stripe } from '@ionic-native/stripe';
/**
 * Generated class for the StripepaymentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'stripepayment',
  templateUrl: 'stripepayment.html',
  providers: [Stripe]
})
export class StripepaymentComponent {

  text: string;

  constructor(private stripe: Stripe) {
    console.log('Hello StripepaymentComponent Component');
    this.text = 'Hello World';
  }

  //this.stripe.setPublishableKey('');

  // var card = {
  //   number: '4242424242424242',
  //   expMonth: 12,
  //   expYear: 2020,
  //   cvc: '220'
  //  };
   
  //  this.stripe.createCardToken(card)
  //     .then(token => console.log(token.id))
  //     .catch(error => console.error(error));
}
