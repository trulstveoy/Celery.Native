var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require('data/observable');
var observable_array_1 = require('data/observable-array');
var http = require('http');
var frame = require('ui/frame');
var MainPageModel = (function (_super) {
    __extends(MainPageModel, _super);
    function MainPageModel(page) {
        _super.call(this);
        this.topmost = frame.topmost();
        this.items = new observable_array_1.ObservableArray();
        this.page = page;
    }
    ;
    MainPageModel.prototype.onSearch = function () {
        var _this = this;
        var searchText = this.get('searchText');
        var url = 'http://celery.azurewebsites.net/api/food/?query=' + searchText;
        http.getJSON(url).then(function (items) {
            _this.items.push(items);
        }, function (e) {
            _this.set('output', e);
        });
    };
    MainPageModel.prototype.clearSearch = function () {
        this.items.splice(0);
        this.set('output', 'clear');
    };
    MainPageModel.prototype.moveAction = function () {
        this.topmost.navigate('newpage');
    };
    MainPageModel.prototype.listViewItemTap = function () {
        this.topmost.navigate('newpage');
    };
    return MainPageModel;
})(observable_1.Observable);
var model = undefined;
function pageLoaded(args) {
    var page = args.object;
    if (model === undefined) {
        model = new MainPageModel(page);
    }
    page.bindingContext = model;
}
exports.pageLoaded = pageLoaded;