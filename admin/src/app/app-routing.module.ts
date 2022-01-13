import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HiComponent} from "./screen/hi/hi.component";

const routes: Routes = [
  {
    path: 'hi', component: HiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
