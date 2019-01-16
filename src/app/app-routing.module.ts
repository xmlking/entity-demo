import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './containers/accounts/accounts.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { SubscriptionsComponent } from './containers/subscriptions/subscriptions.component';
import { SubscriptionDetailComponent } from './components/subscription-detail/subscription-detail.component';
import { NotificationsComponent } from './containers/notifications/notifications.component';
import { NotificationDetailComponent } from './components/notification-detail/notification-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accounts',
    pathMatch: 'full',
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    children: [
      {
        path: ':id',
        component: AccountDetailComponent,
      },
    ],
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
    children: [
      {
        path: ':id',
        component: SubscriptionDetailComponent,
      },
    ],
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    children: [
      {
        path: ':id',
        component: NotificationDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
