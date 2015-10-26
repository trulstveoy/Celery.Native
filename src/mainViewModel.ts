import * as observable from 'data/observable';
import * as searchBarModule from 'ui/search-bar';
import * as http from 'http';

export class MainViewModel extends observable.Observable {
    private counter: number;
    constructor() {
        super();  
    }
    
    public onSearch() {        
        const searchText = this.get('searchText');        
        const url = 'http://celery.azurewebsites.net/api/food/?query=' + searchText;
            
        http.getJSON(url).then(json => {
            this.set('output', json);
        }, e => {
           this.set('output', e);
        });
    }    
}
export var mainViewModel = new MainViewModel();