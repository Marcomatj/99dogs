import { Routes } from "@angular/router"
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from "./contact/contact.component";
import { ApplicationComponent } from "./application/application.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent}

]
