Feature: Log In


  Scenario: TC-001 LogIn to the Report Portal
    Given I am on the login page
    When Enter default credential
    Then User see home page
