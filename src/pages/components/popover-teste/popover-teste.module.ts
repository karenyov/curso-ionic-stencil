import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverTestePage } from './popover-teste';

@NgModule({
  declarations: [
    PopoverTestePage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverTestePage),
  ],
})
export class PopoverTestePageModule {}
