import { BehaviorSubject, withLatestFrom } from "rxjs";

export class State extends BehaviorSubject<any> {
    public actions;
    public reducer$:any;
    public nextStateObject;
    constructor(initalState:any,actions: any,reducer$:any)
    {
        super(initalState);
        this.actions=actions;
        this.nextStateObject={state:initalState};
        this.actions.pipe(withLatestFrom(reducer$))
        .subscribe( ([action])=>{
            this.nextStateObject={state:
                
                reducer$.calcul(this.nextStateObject.state,action)
            }
            this.next (this.nextStateObject.state);

        } )
    }


}

    