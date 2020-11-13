import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFooComponent } from 'src/app/page-foo/page-foo.component';

import { PageTestComponent } from './page-test/page-test.component';

const routes: Routes = [
  { path: 'test', component: PageTestComponent },
  { path: 'foo', component: PageFooComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
