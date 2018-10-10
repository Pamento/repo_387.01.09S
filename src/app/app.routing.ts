import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { MoreComponent } from './more/more.component';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormSignupComponent } from './form-signup/form-signup.component';

const routes: Routes = [
    // {path: '', pathMatch: 'full', redirectTo: 'first'}
    { path: '', component: HomeComponent },
    { path: 'aboutteacher', component: AboutTeacherComponent },
    { path: 'frenchCourses', component: CoursesComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'more', component: MoreComponent },
    { path: 'login', component: LoginComponent,
        children: [
            { path: '', redirectTo: 'loginForm', pathMatch: 'full' },
            { path: 'login-form', component: FormLoginComponent },
            { path: 'signup-form', component: FormSignupComponent },
        ] },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
    HomeComponent
];
