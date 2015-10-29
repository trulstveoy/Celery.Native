var application = require('application');
var trace = require('trace');
trace.enable();
trace.write('App started', 'info');
application.mainModule = "./mainPage";
application.start();