import {Page} from 'ui/page';
import {EventData, Observable} from 'data/observable';
import {ObservableArray} from 'data/observable-array';
import * as http from 'http';

class NewPageModel extends Observable {       
    constructor() {
        super();
    }
}

export function pageLoaded(args: EventData) {    
    var page = <Page>args.object;
    page.bindingContext = new NewPageModel();
}