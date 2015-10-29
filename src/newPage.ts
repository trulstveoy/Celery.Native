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
}

// export function pageLoaded(args: EventData) {    
//     const page = <Page>args.object;    
//     page.bindingContext = new NewPageModel(page);
// }

let model:NewPageModel = undefined;
export function pageNavigatedTo(args: observable.EventData) {
    var page = <pages.Page>args.object;
    if(model === undefined){
        modl = new NewPageModel(page);
    }
    page.bindingContext = model;
}

