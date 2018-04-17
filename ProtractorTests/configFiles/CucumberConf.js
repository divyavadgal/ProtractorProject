exports.config = {
	directConnect: true,
	// set to "custom" instead of cucumber.
	framework : 'custom',

	// path relative to the current config file
	frameworkPath : require.resolve('protractor-cucumber-framework'),

	// require feature files
	specs : [ './specFiles/features/first.feature' // accepts a glob
	],

	cucumberOpts : {
		/*tags: false,
	    format: 'pretty',
	    profile: false,
	    'no-source': true,*/
		/*strict : true,
		'no-colors' : true,
		format : [ 'progress', 'pretty:output.txt' ],
*/
		// require step definitions
		require : [ './specFiles/cucumberStepDefi/.steps.js' // accepts a glob
		]
	}
}