import {Page,ShownModallyData} from 'ui/page';
import {EventData, Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';
import * as http from 'http';

class NewPageModel extends Observable {
    private page:Page;
    
    constructor(page) {
        super();
        this.page = page;
    }
    
    setOutput(item:food){
        this.set('name', item.name);
        this.set('calories', item.calories);
    }
}

let model:NewPageModel = undefined;
export function pageNavigatedTo(args: EventData) {
    var page = <Page>args.object;
    if(model === undefined){
        model = new NewPageModel(page);
    }
    model.setOutput((<any>args).context);
    page.bindingContext = model;
}

