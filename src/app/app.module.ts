import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, HomeComponent, AboutComponent, LoginComponent, TrackOrderComponent, ContactUsComponent, OrdersComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
