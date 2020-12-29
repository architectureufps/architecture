import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
// import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { RutasComponent } from "./pages/examples/rutas/rutas.component";
import { MapaComponent } from "./pages/examples/mapa/mapa.component";
import { VideosComponent } from "./pages/examples/videos/videos.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "Strategy", component: ProfilepageComponent },
  { path: "Videos", component: RegisterpageComponent },
  // { path: "landing", component: LandingpageComponent },
  { path: "Team", component: RutasComponent },
  { path: "videos", component: VideosComponent},
  { path: "Maps", component: MapaComponent },
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
