import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsComponent } from './containers/accounts/accounts.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { SubscriptionsComponent } from './containers/subscriptions/subscriptions.component';
import { SubscriptionDetailComponent } from './components/subscription-detail/subscription-detail.component';
import { NotificationsComponent } from './containers/notifications/notifications.component';
import { NotificationDetailComponent } from './components/notification-detail/notification-detail.component';
import { NotificationEditComponent } from './components/notification-edit/notification-edit.component';
import { SharedModule } from './shared';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AccountDetailComponent,
    AccountEditComponent,
    SubscriptionsComponent,
    SubscriptionDetailComponent,
    NotificationsComponent,
    NotificationDetailComponent,
    NotificationEditComponent,
  ],
  entryComponents: [AccountEditComponent, NotificationEditComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
      delay: 1000,
      // apiBase: 'api'
    }),
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
