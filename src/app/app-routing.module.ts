import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { ContactComponent } from './contact/contact.component';
import { BachelorComponent } from './bachelor/bachelor.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'education', component: EducationComponent,
  children: [
    {
        path: '',
        component: BachelorComponent
    },
    {
        path: 'bachelor',
        component: BachelorComponent
    },
    {
      path: 'master',
      component: MasterComponent
  }
]       
},
  { path: 'projects', component: ProjectsComponent },
  { path: 'credentials', component: CredentialsComponent },
  { path: 'contact', component: ContactComponent },
  {path:'', component:HomeComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
