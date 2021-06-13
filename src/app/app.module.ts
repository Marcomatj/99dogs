import { ROUTES } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ApplicationComponent } from './application/application.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderPicturesComponent } from './header/header-pictures/header-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ApplicationComponent,
    ContactComponent,
    HeaderPicturesComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(ROUTES, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
