import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SocialComponent } from './component/social/social.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {DataViewModule} from 'primeng/dataview';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule }          from '@angular/forms';


import {CatService} from './service/cat.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent
  ],
  imports: [
    FlexLayoutModule,
    DataViewModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    CarouselModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
