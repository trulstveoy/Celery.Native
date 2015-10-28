import {Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';
import * as http from 'http';

export default class MainPageModel extends Observable {
    
    private items = new ObservableArray<string>();
    
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