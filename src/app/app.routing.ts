import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { MoreComponent } from './components/pages/more/more.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FormLoginComponent } from './components/partials/form-login/form-login.component';
import { FormSignupComponent } from './components/partials/form-signup/form-signup.component';
import { ExercisesComponent } from './components/pages/exercises/exercises.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormContactComponent } from './components/pages/form-contact/form-contact.component';
import { FormResetpasswordComponent } from './components/partials/form-resetpassword/form-resetpassword.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: FormContactComponent },
  { path: 'frenchCourses', component: CoursesComponent },
  { path: 'exercises', component: ExercisesComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'articles', component: BlogComponent },
  { path: 'news', component: MoreComponent },
  {
    path: 'login', component: LoginComponent,
    children: [
      { path: '', redirectTo: 'loginForm', pathMatch: 'full' },
      { path: 'login-form', component: FormLoginComponent },
      { path: 'signup-form', component: FormSignupComponent },
      { path: 'reset', component: FormResetpasswordComponent }
    ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent
];
