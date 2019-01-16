import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { EntityService } from '../shared';
import { Subscription } from '../models/subscription.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService extends EntityService<Subscription> {
  // Optionally overwrite baseUrl
  public baseUrl = environment.API_BASE_URL;
  readonly entityPath = 'subscriptions';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAll(): Observable<Subscription[]> {
    this.loadingSubject.next(true);
    return this.httpClient.get<Subscription[]>(`${this.baseUrl}/${this.entityPath}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}
