import { Injectable } from '@angular/core';
import { IPerson } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  getPeople(): Array<IPerson> {
    return [
      { id: 1, firstName: 'ali', lastName: 'mazaheri', country: 'Iran' },
      { id: 2, firstName: 'mona', lastName: 'mosavi', country: 'Turkey' },
      { id: 3, firstName: 'sara', lastName: 'namdar', country: 'Iran' },
      { id: 4, firstName: 'alice', lastName: 'akbari', country: 'Turkey' },
      { id: 5, firstName: 'aras', lastName: 'kharazian', country: 'Poland' },
      { id: 6, firstName: 'java', lastName: 'kashani', country: 'Iran' },
      { id: 7, firstName: 'viki', lastName: 'ameri', country: 'Poland' },
      { id: 8, firstName: 'moni', lastName: 'khordadi', country: 'Iran' },
      { id: 9, firstName: 'yaser', lastName: 'emami', country: 'Turkey' },
      { id: 10, firstName: 'pori', lastName: 'ahmadian', country: 'Iran' },
    ]
  }
}
