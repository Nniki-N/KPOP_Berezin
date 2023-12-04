import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private isLoading = false;

  setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  isLoadingState() {
    return this.isLoading;
  }
}
