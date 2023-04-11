# cypress_v12.9.0

## Pre-requisites
1. Node version: 16.19.0 or higher https://nodejs.org/en/download/ 
2. npm version: 9.2.0 or higher
3. Cypress version: latest
4. Typescript version: 4.4.4 or higher
5. VSCode IDE


## Run Cypress test
Ways to run Cypress UI test.

1. Run test scripts locally for all scenarios in headless mode
```
npx cypress run
```

this will run all scenarios from all files with the extension of .feature.
By default, when running **npx cypress run**, we will launch a test headlessly with the default browser Electron.
To run the test using chrome browser, add **--browser chrome**. 
```
npx cypress run --browser chrome 
```

2. Open Cypress Test Runner
This is suitable when developing test scripts. It will open a dashboard where you can select which test to run. It will also shows test execution process.
```
npx cypress open --e2e --browser=chrome
```

3. Another way to run the test was to use npm script. 
Put cypress test command at the **package.json** scripts and run the script thru **npm run <name of script> **
For example:
  The package.json has test script that contains command "npx cypress run --browser chrome"

## Writing automation scripts
  1. Feature files
  
  All .feature files can be found at the **cypress/ui-e2e/** directory. This file contains Gherkin steps
  
``` 
  Feature: Search panda
  
  Background: Browser state
    Given browser is at google search page
  
  Scenario: Search Panda
    When the user search "Panda"
    Then sites related to Panda is shown
```
 Link: https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/
  
  2. Step Definitions
  
  Step definition is a piece of code that maps natural language steps written in a feature file to the actual code that performs the corresponding action in the application.
It is written in Javascript or Typescript and they provide the glue between the human-readable steps in the feature file and the underlying code that implements the behavior being tested.
  ```
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^browser is at google search page$/, ()=>{
  cy.visit('/'); //URL has been save at cypress.config.ts > baseUrl 
});

When(/^the user search "([^"]*)"$/, (searchValue : string)=>{
  cy.get(`[id="APjFqb"]`).should(`exist`).type(`${searchValue}{enter}`);
  cy.get
});

Then(/^"([^"]*)" search result is shown$/, (searchValue:string)=>{
  cy.findByText(searchValue).should(`exist`);
});


  ```
  
### CODE EDITOR: VSCODE AND EXTENSIONS
VSCode is the suitable code editor for Cypress. And there are plugins to make it more easier editing scripts.
To install plugins, go to VSCode extension and search then install plugins listed below.
Required:

Cucumber (Gherkin) Full Support

Optional:

Feature Syntax Highlight and Snippets (Cucumber/Gherkin)

Color Highlight

Material Icon Theme

Cucumber (Gherkin) Full Support setup
1. Install the plugin by navigating into VSCode extension and search Cucumber (Gherkin) Full Support. The have it installed into the code editor
2. Go to File > Preferences > Settings
3. At the settings page, click into Workspace and click open settings icon. This will open a settings.json file
4. Paste the following into the json file
  ```
  {
    "cucumberautocomplete.steps": ["./cypress/ui-e2e/**/*.ts"],
    "cucumberautocomplete.syncfeatures": "./cypress/ui-e2e/**/*.feature",
}
```
  
The Steps above enable 3 things

Gherkin format in feature file (color coding for pre-defined Gherkin/BDD terminologies)

  Step autocomplete

  Go to Step Definition by ctrl+click or F12 on the step in the feature file
