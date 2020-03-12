import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent } from '../app/components/sign-in/sign-in.component';
import {SignUpComponent } from '../app/components/sign-up/sign-up.component';
import {ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import {VerifyEmailComponent } from '../app/components/verify-email/verify-email.component';
import {DashboardComponent } from '../app/components/dashboard/dashboard.component';
import {SecureInnerPagesGuard} from '../app/shared/secure-inner-pages.guard.ts.guard';
import {AuthGuard } from '../app/shared/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
