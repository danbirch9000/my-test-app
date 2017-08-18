import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CallbackComponent} from './components/callback/callback.component';
import {AppComponent} from "./app.component";


export const ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
