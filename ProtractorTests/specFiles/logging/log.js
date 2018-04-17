var winston = require('winston');
// my own logger
var logger = new (winston.Logger)({
	  transports: [
	    new (winston.transports.File)({
	      name: 'info-file-log',
	      filename: './specFiles/logging/log-info-output.log',
	      level: 'info'
	    }),
	    new (winston.transports.File)({
	      name: 'error-file',
	      filename: './specFiles/logging/log-error-output.log',
	      level: 'error'
	    }),
	    new (winston.transports.Console)({
	    	 timestamp: true
		    })
	  ]
	});
module.exports =logger;

/*OR
winston.configure({
    transports: [
      new (winston.transports.File)({ filename: 'somefile.log' })
    ]
  });*/