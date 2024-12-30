import { Routes } from '@angular/router';
import { DetailsPostComponent } from './details-post/details-post.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsPostComponent
  },
  {
    path: '',
    component: MainComponent
  }
];
