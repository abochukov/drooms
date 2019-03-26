import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainDetailsComponent } from './main-details/main-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'main/:id', component: MainDetailsComponent },
];

export const Routing = RouterModule.forRoot(appRoutes);
