import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './login.routes';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { AuthService } from './auth.service';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [LoginFormComponent, ProfileComponent, UsersListComponent],
  imports: [
    RouterModule.forChild(LoginRoutes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [UsersListComponent, LoginFormComponent, ProfileComponent],
  providers: [AuthService],
})
export class LoginModule {}
