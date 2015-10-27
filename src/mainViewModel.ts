import * as observable from 'data/observable';
import * as http from 'http';
import * as observableArray from 'data/observable-array';

export class MainViewModel extends observable.Observable {
    
    private items = new observableArray.ObservableArray<string>();
    
    constructor() {
        super();   
    }
    
    onSearch() {                
        const searchText = this.get('searchText');        
        const url = 'http://celery.azurewebsites.net/api/food/?query=' + searchText;
            
        http.getJSON(url).then((items:any) => {
            this.items.push(items);           
        }, e => {
           this.set('output', e);
        });
    }
    
    clearSearch(){
        this.items.splice(0);
        this.set('output', 'clear');
    }    
}
export var mainViewModel = new MainViewModel();