import * as observable from 'data/observable';
import * as http from 'http';

export class MainViewModel extends observable.Observable {
    private counter: number;
    constructor() {
        super();       
        
        this.on(observable.Observable.propertyChangeEvent, data => {
            
            const url = 'http://celery.azurewebsites.net/api/food/?query=' + (<any>data.object).searchText;
            
            http.getJSON(url).then(json => {
                this.set('output', json);
            }, e => {
               this.set('output', e);
            });
           
        });
        
        const s = 'foo';
        console.log(s);
        
        this.set('searchText', '');
    }

    // public tapAction() {
    //     this.counter--;
    //     if (this.counter <= 0) {
    //         this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    //     }
    //     else {
    //         this.set("message", this.counter + " taps left")
    //     }
    // }
}
export var mainViewModel = new MainViewModel();