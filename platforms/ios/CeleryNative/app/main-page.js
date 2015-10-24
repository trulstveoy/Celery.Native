define(["require", "exports", "./main-view-model"], function (require, exports, vmModule) {
    // Event handler for Page "loaded" event attached in main-page.xml
    function pageLoaded(args) {
        // Get the event sender
        var page = args.object;
        page.bindingContext = vmModule.mainViewModel;
    }
    exports.pageLoaded = pageLoaded;
});
