import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDatePage } from './search-date.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDatePageRoutingModule {}
