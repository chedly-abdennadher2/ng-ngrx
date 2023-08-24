import { Injectable } from '@angular/core';
import { Store } from './store';
let state={
  count:0
}

@Injectable({
  providedIn: 'root'
})
export class NgrxService {

  private store=new Store (state);
getStore ()
{
  return this.store;
}
}
