var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var observable_1 = require('data/observable');
var NewPageModel = (function (_super) {
    __extends(NewPageModel, _super);
    function NewPageModel() {
        _super.call(this);
    }
    return NewPageModel;
})(observable_1.Observable);
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new NewPageModel();
}
exports.pageLoaded = pageLoaded;