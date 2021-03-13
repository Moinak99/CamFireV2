import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchDatePageRoutingModule } from './search-date-routing.module';

import { SearchDatePage } from './search-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchDatePageRoutingModule
  ],
  declarations: [SearchDatePage]
})
export class SearchDatePageModule {}
