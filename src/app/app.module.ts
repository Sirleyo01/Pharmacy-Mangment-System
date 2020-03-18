import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUserdetailsComponent } from './header/header-userdetails/header-userdetails.component';
import { HeaderTaskbarComponent } from './header/header-taskbar/header-taskbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MenuitemComponent } from './sidemenu/menuitem/menuitem.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { StatPanelComponent } from './mainwindow/stat-panel/stat-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserdetailsComponent,
    HeaderTaskbarComponent,
    SidemenuComponent,
    MenuitemComponent,
    MainwindowComponent,
    StatPanelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }