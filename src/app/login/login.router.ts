import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register/register.component";
export const routes: Routes = [];

routes.push({path: 'login', component: LoginComponent});
routes.push({path: '', redirectTo: 'login', pathMatch: 'full'});
routes.push({path: 'register', component: RegisterComponent});
