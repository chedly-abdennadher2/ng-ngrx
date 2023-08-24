import { BehaviorSubject } from "rxjs";

export class Action extends BehaviorSubject<any>
{
    constructor()
    {
        super({type:"init"})
    }
}
