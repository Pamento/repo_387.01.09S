import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';

const routes: Routes = [
    // {path: '', pathMatch: 'full', redirectTo: 'first'}
    { path: '', component: HomeComponent },
    { path: 'aboutteacher', component: AboutTeacherComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
    HomeComponent
];