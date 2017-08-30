import { NgModule }  from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 
 
import { AppHomeComponent } from './home/app-home.component';  
import { AppTestComponent } from './test/app-test.component'; 
 
export const routes: Routes = [ 
	 
	{ path: '',pathMatch:'full',redirectTo:'home' },
	{path:'homePage',component:AppComponent}, 
	{ path: 'home', component: AppHomeComponent }, 
	{ path: 'test', component: AppTestComponent }, 
	{ path: '**',pathMatch:'full',redirectTo:'home' },
	{ path: '#',pathMatch:'full',redirectTo:'home' } 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

