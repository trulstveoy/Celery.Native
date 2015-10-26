var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable = require('data/observable');
var http = require('http');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = this;
        _super.call(this);
        this.on(observable.Observable.propertyChangeEvent, function (data) {
            var url = 'http://celery.azurewebsites.net/api/food/?query=' + data.object.searchText;
            http.getJSON(url).then(function (json) {
                _this.set('output', json);
            }, function (e) {
                _this.set('output', e);
            });
        });
        var s = 'foo';
        console.log(s);
        this.set('searchText', '');
    }
    return MainViewModel;
})(observable.Observable);
exports.MainViewModel = MainViewModel;
exports.mainViewModel = new MainViewModel();
