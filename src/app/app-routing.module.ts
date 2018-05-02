import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
	{path: '', redirectTo: '/', pathMatch: 'full'},
	{path: 'about', component: AboutComponent},
	{path: 'user/list', component: UserListComponent},
	{path: 'user/create', component: UserCreateComponent},
	{path: 'home', component: HomeComponent},
	{path: '**', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
