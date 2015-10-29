var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require('data/observable');
var observable_array_1 = require('data/observable-array');
var http = require('http');
var frameModule = require("ui/frame");
var MainPageModel = (function (_super) {
    __extends(MainPageModel, _super);
    function MainPageModel(page) {
        _super.call(this);
        this.topmost = frameModule.topmost();
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
        var modalPage = 'newPage';
        this.page.showModal(modalPage, 'some text', function () { }, true);
    };
    MainPageModel.prototype.listViewItemTap = function () {
        var navigationEntry = {
            moduleName: "newPage",
            backstackVisible: false
        };
        this.topmost.navigate(navigationEntry);
    };
    return MainPageModel;
})(observable_1.Observable);
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new MainPageModel(page);
}
exports.pageLoaded = pageLoaded;