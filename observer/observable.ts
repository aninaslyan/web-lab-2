import { Observer } from '../types';

class Observable { // todo implements
    public observers: Array<Observer> = [];

    constructor() {
    }

    public subscribe(f: Observer) {
        this.observers.push(f);
    }

    public unsubscribe(f: Observer) {
        this.observers.forEach((subscriber, index) => {
            if (subscriber === f) {
                this.observers.splice(index, 1);
            }
        })
    }

    public notify(data: string) {
        this.observers.forEach(observer => observer(data));
    }
}
