import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { HomeComponent } from './features/pages/home/home.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { loggedUserGuard } from './core/guards/auth/logged-user.guard';

export const routes: Routes = [];
