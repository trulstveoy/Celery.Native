var vmModule = require('./mainViewModel');
// Event handler for Page "loaded" event attached in mainPage.xml
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;
