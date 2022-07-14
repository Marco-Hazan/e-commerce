import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { FootComponent } from './foot/foot.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
