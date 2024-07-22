import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appProviders } from './app/app.config';
import { appRoutingProviders } from './app/app.routes';
import { StaffListComponent } from './app/components/staff-list/staff-list.component';
import { StaffCreateComponent } from './app/components/staff-create/staff-create.component';
import { StaffEditComponent } from './app/components/staff-edit/staff-edit.component';
import { StaffDetailsComponent } from './app/components/staff-details/staff-details.component';

bootstrapApplication(AppComponent, {
  providers: [
    ...appProviders,
    ...appRoutingProviders,
     StaffListComponent,
    StaffCreateComponent,
    StaffEditComponent,
    StaffDetailsComponent
  ]
});
