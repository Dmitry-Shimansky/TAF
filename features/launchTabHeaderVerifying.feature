Feature: Launch Tab Header Verifying


  Scenario: TC-001 Check header for Launch tab
    Given Login to the Report Portal
    When Switch tab to the Launch
    Then Get launch tab header
      | NAME            |
      | START TIME      |
      | TOTAL           |
      | PASSED          |
      | FAILED          |
      | SKIPPED         |
      | PRODUCT BUG     |
      | AUTO BUG        |
      | SYSTEM ISSUE    |
      | TO INVESTIGATE  |
