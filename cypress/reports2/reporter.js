const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: 'cypress/reports2/cucumber-json/',
    reportPath: 'cypress/reports2',
    metadata:{
        browser: {
            name: 'Electron',
           // version: '60'
        },
        device: 'Local',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});