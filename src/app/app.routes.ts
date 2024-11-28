import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListComponent } from './components/list/list.component';
import { UpdateFarmerComponent } from './components/update-farmer/update-farmer.component';

export const routes: Routes = [
{path:'register',component:RegistrationComponent},
{path:'list',component:ListComponent},
{path: 'edit/:id',component:RegistrationComponent}
    
];
