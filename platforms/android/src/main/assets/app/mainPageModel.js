var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require('data/observable');
var observable_array_1 = require('data/observable-array');
var http = require('http');
var MainPageModel = (function (_super) {
    __extends(MainPageModel, _super);
    function MainPageModel() {
        _super.call(this);
        this.items = new observable_array_1.ObservableArray();
    }
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
    return MainPageModel;
})(observable_1.Observable);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainPageModel;
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new MainPageModel();
}
exports.pageLoaded = pageLoaded;