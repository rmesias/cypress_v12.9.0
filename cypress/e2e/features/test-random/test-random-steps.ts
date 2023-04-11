import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^browser is at google search page$/, () => {
  cy.visit('/'); //URL has been save at cypress.config.ts > baseUrl
});

When(/^the user search "([^"]*)"$/, (searchValue: string) => {
  cy.get(`[name="q"]`).should(`exist`).type(`${searchValue}{enter}`);
  cy.get;
});

Then(/^"([^"]*)" search result is shown$/, (searchValue: string) => {
  cy.get('span').contains(searchValue).should(`exist`);
});
