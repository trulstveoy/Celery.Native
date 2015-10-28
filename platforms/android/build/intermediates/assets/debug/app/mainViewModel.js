var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable = require('data/observable');
var http = require('http');
var observableArray = require('data/observable-array');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        this.items = new observableArray.ObservableArray();
    }
    MainViewModel.prototype.onSearch = function () {
        var _this = this;
        var searchText = this.get('searchText');
        var url = 'http://celery.azurewebsites.net/api/food/?query=' + searchText;
        http.getJSON(url).then(function (items) {
            _this.items.push(items);
        }, function (e) {
            _this.set('output', e);
        });
    };
    MainViewModel.prototype.clearSearch = function () {
        this.items.splice(0);
        this.set('output', 'clear');
    };
    return MainViewModel;
})(observable.Observable);
exports.MainViewModel = MainViewModel;
exports.mainViewModel = new MainViewModel();