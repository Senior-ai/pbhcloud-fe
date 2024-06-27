import { Routes, RouterModule  } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomePageComponent } from './welcome-page-component/welcome-page-component.component';

export const routes: Routes = [
    {path: '', component: WelcomePageComponent	}
];
