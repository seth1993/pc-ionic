import { NgModule } from '@angular/core';
import { PostcardComponent } from './postcard/postcard';
import { StripepaymentComponent } from './stripepayment/stripepayment';
@NgModule({
	declarations: [PostcardComponent,
    StripepaymentComponent],
	imports: [],
	exports: [PostcardComponent,
    StripepaymentComponent]
})
export class ComponentsModule {}
