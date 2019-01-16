import { InMemoryDbService, ParsedRequestUrl, RequestInfo, RequestInfoUtilities } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  async createDb() {
    const response = await fetch('assets/data/accounts.json');
    const accounts = await response.json();

    const notificationsResponse = await fetch('assets/data/notifications.json');
    const notifications = await notificationsResponse.json();

    const subscriptionsResponse = await fetch('assets/data/subscriptions.json');
    const subscriptions = await subscriptionsResponse.json();

    return { accounts, notifications, subscriptions };
  }

  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const newUrl = url
      .replace(/\/notifications\/user/, '/notifications')
      .replace(/\/datapower\/serviceproxy/, '/serviceproxy')
      .replace(/\/nas\/cluster/, '/cluster')
      .replace(/\/layer7\/my.cnf/, '/mycnf');

    const parsed = utils.parseRequestUrl(newUrl);
    // console.log(`parseRequestUrl override of '${url}':`, parsed);
    // console.log(`parseRequestUrl override of '${url}':`, `new: ${newUrl}`);
    return parsed;
  }

  put(reqInfo: RequestInfo) {
    (reqInfo.req as any).body = { id: reqInfo.id, ...(reqInfo.req as any).body };
  }
}
