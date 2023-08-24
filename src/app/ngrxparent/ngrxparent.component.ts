import { Component } from '@angular/core';
import { NgrxService } from '../ngrx.service';

@Component({
  selector: 'app-ngrxparent',
  templateUrl: './ngrxparent.component.html',
  styleUrls: ['./ngrxparent.component.css']
})
export class NgrxparentComponent {
state
constructor(private ngrxService: NgrxService)
{
  this.ngrxService.getStore().subscribe((s:any)=>
  {
    this.state=s.count
  }
  )
}
disAction()
{
  this.ngrxService.getStore().dispatch({
    type:'ADD',
    payload: 56
  })
alert (this.state)
}
}
