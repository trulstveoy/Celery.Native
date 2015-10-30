import {Page} from 'ui/page';
import {EventData, Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';
import * as http from 'http';
import * as frame from 'ui/frame';

class MainPageModel extends Observable {
    private topmost = frame.topmost() ;
    private items = new ObservableArray<{id:string;name:string}>();;
    private page:Page;
    
    constructor(page) {
        super();
        this.page = page;
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
    
    listViewItemTap(args) {
        var item = this.items.getItem(args.index);
        //this.set('output', item.id);        
        
        this.topmost.navigate({
            moduleName: 'newPage',
            context: item
        });
    }
}

let model:MainPageModel=undefined;
export function pageLoaded(args: EventData) {    
    var page = <Page>args.object;       
    if(model === undefined){
        model = new MainPageModel(page);
    }
    page.bindingContext = model;
}