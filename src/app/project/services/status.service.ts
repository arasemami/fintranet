import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  getStatus(): Array<string> {
    return ['status 1', 'status 2', 'status 3', 'status 4']
  }
}
