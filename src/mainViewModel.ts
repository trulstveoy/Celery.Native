import * as observable from "data/observable";

export class MainViewModel extends observable.Observable {
    private counter: number;
    constructor() {
        super();

        // Initialize default values.
        this.counter = 48;
        this.set("message", this.counter + " taps left");
    }

    public tapAction() {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left")
        }
    }
}
export var mainViewModel = new MainViewModel();