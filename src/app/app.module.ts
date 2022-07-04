import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { FootComponent } from './foot/foot.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
