import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AkshayComponent } from './akshay/akshay.component';
import { AartiComponent } from './aarti/aarti.component';
import { AkaarComponent } from './akaar/akaar.component';

const routes: Routes = [
  { path: '', component: AkaarComponent },
  { path: 'akaar', component: AkaarComponent },
  { path: 'akshay', component: AkshayComponent },
  { path: 'aarti', component: AartiComponent },
  { path: '**', component: AkaarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
