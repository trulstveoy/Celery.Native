import {EventData} from 'data/observable';
import {Page} from 'ui/page';
import MainPageModel from './mainPageModel';

export function pageLoaded(args: EventData) {    
    var page = <Page>args.object;
    page.bindingContext = new MainPageModel();
}