import { IObservable, IObserver } from "../interfaces";

class Observer implements IObserver {
    constructor(
        private subscription: (data: string) => void,
    ) { }

    public update(observable: IObservable, data: string): void {
        // @ts-ignore
        if (observable instanceof Observable) {
            console.log('Observer: Reacted to the event.');
            this.subscription(data);
        }
    }
}
