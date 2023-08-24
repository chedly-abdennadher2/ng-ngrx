import { BehaviorSubject } from "rxjs";

export class Reducer extends BehaviorSubject<any>{

    constructor (reducer:any) 
    {
        super (reducer)
    }
    public calcul (state:any,action:any)
    {
        switch(action.type)
        {
            case "ADD":
                {
                    return {count:state.count+action.payload}
                
                }
                case "SUB": 
                {
                    return {count : state.count-action.payload}

                }
                default :
                {return state;}
        }
        
    }
}