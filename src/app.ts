import * as application from 'application';
import * as trace from 'trace';

trace.enable();
trace.write('App started', 'info');

application.mainModule = "./mainPage";
application.start();
