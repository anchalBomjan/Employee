
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { StaffCreateComponent } from './components/staff-create/staff-create.component';
import { StaffEditComponent } from './components/staff-edit/staff-edit.component';
import { StaffDetailsComponent } from './components/staff-details/staff-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/staffs', pathMatch: 'full' },
  { path: 'staffs', component: StaffListComponent },
  { path: 'staffs/create', component: StaffCreateComponent },
  { path: 'staffs/edit/:id', component: StaffEditComponent },
  { path: 'staffs/details/:id', component: StaffDetailsComponent }
];

export const appRoutingProviders = [
  provideRouter(routes)
];
