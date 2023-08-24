import { Observable, map, pluck } from "rxjs";
import { Action } from "./action";
import { Reducer } from "./reducer";
import { State } from "./state";

export class Store extends Observable<any>{
    public actionOb:any;
    public state:any;
    public reducer$:any;
    constructor (initalState)
    {
        super();
        this.actionOb=new Action();
        this.reducer$=new Reducer(this.reducer$);
        this.state=new State(initalState,this.actionOb, this.reducer$);
        this.source=this.state;
    }
    dispatch (action)
    {
        this.actionOb.next(action)
    }
 select (propName)
    {

        if (typeof (propName)=="string")
        {
            return this.source.pipe(pluck(propName))
        }
        else if (typeof(propName)=="function") {
             return this.source.pipe(map(propName));
        
        }
        else {
            return null;
        }
    }
}

