import { Component } from '@angular/core';
import { NgrxService } from '../ngrx.service';

@Component({
  selector: 'app-ngrxchild',
  templateUrl: './ngrxchild.component.html',
  styleUrls: ['./ngrxchild.component.css']
})
export class NgrxchildComponent {
public state
public count;
constructor(private ngrxService: NgrxService)
{
 this.count= this.ngrxService.getStore().select("count")
}
disAction()
{

  this.ngrxService.getStore().dispatch({
    type:'SUB',
    payload: 56
  })
}
}
