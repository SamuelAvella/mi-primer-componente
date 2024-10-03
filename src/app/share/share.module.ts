import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';



@NgModule({
  declarations: [PersonalCardComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[PersonalCardComponent]
})
export class ShareModule { }
