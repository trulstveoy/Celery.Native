import {Page} from 'ui/page';
import {EventData, Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';
import * as http from 'http';
import frameModule = require("ui/frame");


class MainPageModel extends Observable {
    private topmost = frameModule.topmost();
    private items = new ObservableArray<string>();;
    
    constructor() {
        super();;
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
    
    moveAction(){
        this.topmost.navigate('newPage');
    }
}

export function pageLoaded(args: EventData) {    
    var page = <Page>args.object;
    page.bindingContext = new MainPageModel();
}