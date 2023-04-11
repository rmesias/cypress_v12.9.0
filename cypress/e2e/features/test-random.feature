  Feature: Search panda
  
  Background: Browser state
    Given browser is at google search page
  
  Scenario: Search Panda
    When the user search "Panda"
    Then "Giant panda" search result is shown