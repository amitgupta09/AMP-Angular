import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';
import { ChartsModule } from 'ng2-charts';

// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    AppRoutes,
    RouterModule,
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
