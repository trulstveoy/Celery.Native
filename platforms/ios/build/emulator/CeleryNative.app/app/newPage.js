var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require('data/observable');
var NewPageModel = (function (_super) {
    __extends(NewPageModel, _super);
    function NewPageModel(page) {
        _super.call(this);
        this.page = page;
    }
    return NewPageModel;
})(observable_1.Observable);
var model = undefined;
function pageNavigatedTo(args) {
    var page = args.object;
    if (model === undefined) {
        modl = new NewPageModel(page);
    }
    page.bindingContext = model;
}
exports.pageNavigatedTo = pageNavigatedTo;