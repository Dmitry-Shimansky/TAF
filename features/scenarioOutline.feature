Feature: Verify login with different credentials


  Scenario Outline: Login functionality for a Report Portal
    Given User navigates to Report Portal
    When I enter Username as "<username>" and Password as "<password>"
    Then login should be successful

    Examples:
    | username  | password  |
    | default   | 1q2w3e    |
    | admin     | admin     |
