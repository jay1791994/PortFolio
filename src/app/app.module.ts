import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { ContactComponent } from './contact/contact.component';
import { BachelorComponent } from './bachelor/bachelor.component';
import { MasterComponent } from './master/master.component';
import { RightsideComponent } from './rightside/rightside.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftsideComponent,
    HomeComponent,
    EducationComponent,
    ProjectsComponent,
    CredentialsComponent,
    ContactComponent,
    BachelorComponent,
    MasterComponent,
    RightsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
