const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/test-reports',
    ignoreBadJsonFile: true,
    saveCollectedJSON: true,
	metadata:{
        browser: {
            name: 'chrome',
            version: '107'
        },
        device: 'Docker Image',
        platform: {
            name: 'Ubuntu',
            version: 'latest'
        }
    }
});