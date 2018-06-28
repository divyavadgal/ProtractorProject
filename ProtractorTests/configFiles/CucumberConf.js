exports.config = {
	directConnect: true,
	// set to "custom" instead of cucumber.
	framework : 'custom',

	// path relative to the current config file
	frameworkPath : require.resolve('protractor-cucumber-framework'),

	// require feature files
	specs : [ '../specFiles/features/first.feature' // accepts a glob
	],
	capabilities: {
	    'browserName': 'chrome'
	  },

	cucumberOpts : {
		require :'../specFiles/cucumberStepDefi/*.js',
		 tags: '@dev',
		 'no-colors': true
		/*tags: false,
	    format: 'pretty',
	    profile: false,
	    'no-source': true,*/
		/*strict : true,
		'no-colors' : true,
		format : [ 'progress', 'pretty:output.txt' ],
*/
		// require step definitions
		/*require : ['../specFiles/cucumberStepDefi/Steps.js' // accepts a glob
		]*/
		//require :'../specFiles/cucumberStepDefi/*.js'
			/*['../specFiles/cucumberStepDefi/Steps.js', // accepts a glob
					'../index.js',
					'../node_modules/protractor-cucumber-framework/index.js'
			]*/
			
	}
}