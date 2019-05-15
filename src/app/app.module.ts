import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { MoreComponent } from './components/pages/more/more.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MenuComponent } from './components/partials/menu/menu.component';
import { FormLoginComponent } from './components/partials/form-login/form-login.component';
import { FormSignupComponent } from './components/partials/form-signup/form-signup.component';
import { ExercisesComponent } from './components/pages/exercises/exercises.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormContactComponent } from './components/pages/form-contact/form-contact.component';

import { ComparValidatorDirective } from './shered/compar-validator.directive';
import { FormResetpasswordComponent } from './components/partials/form-resetpassword/form-resetpassword.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { AuthGuard } from './auth/auth.guard';
import { HomeFooterComponent } from './components/partials/home-footer/home-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    BlogComponent,
    MoreComponent,
    LoginComponent,
    MenuComponent,
    ComparValidatorDirective,
    FormLoginComponent,
    FormSignupComponent,
    ExercisesComponent,
    ScheduleComponent,
    FormContactComponent,
    FormResetpasswordComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [DataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
