Feature: Launch Tab Verifying


  Scenario: TC-001 Check result for each test for Launch tab
    Given Login to the Report Portal
    When Switch tab to the Launch
    Then Get result from each test
      | total | passed | failed | skipped |
      |	10	  |	1      |	9   |         |
      |	15    |	5      |	9   |	1     |
      |	20    |	10     |	8   |	2     |
      |	25    |	20     |	5   |         |
      |	30 	  |	30     |        |         |
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
