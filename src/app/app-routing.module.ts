import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// // Lazyload模式路由，适合服务端渲染
// const SSRroutes: Routes = [
//   {
//     path: '',
//     children: []
//   },
//   { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
//   { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
//   { path: '**', redirectTo: '', pathMatch: 'full' },
// ];

// SPA模式路由，适合客户端打包
import { HomePageComponent } from '../pages/home/home-page/home-page.component';
import { AboutPageComponent } from '../pages/about/about-page/about-page.component';
import { LoginPageComponent } from '../pages/user/login-page/login-page.component';
import { PokemonListComponent } from '../pages/pokemon/pokemon-list/pokemon-list.component';
import { PokemonInfoComponent } from '../pages/pokemon/pokemon-info/pokemon-info.component';
const SPAroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'pokemon', component: PokemonListComponent },
  // { path: 'pokemon/pokemonInfo:id', component : PokemonInfoComponent}
];

// 配置路由模式
const routes = SPAroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
