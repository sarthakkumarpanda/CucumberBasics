#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@LearningMMA
Feature: Learning Defensive Techniques
  I want to learn MMA to defend myself

  @EnquiryforMMA
  Scenario: Looking for a good MMA Fight school
    Given I want to learn MMA
    And I Googled about MMA Classes
    When I visited the URL of FightClub100
    And I registered myself online for 3 Demo Classes
    |Class1 | Class 2 | Class 3 |
    |Judo   | Karate  | Boxing  |
    | 1 hour| 1 hour  | 1 hour  |
    Then I was so impressed 
    And I paid 10000 rupees for an annual membership starting from 1st Dec 2019 to 30th Nov 2020
    When 3 of my friends saw my interest
    |Friend 1|Friend 2|Friend 3|
    |Rohan   | Mohan  | Sohan  |
    |20      |  30    |   40   |
    Then They also took 1 year membership
    But They had to pay 9000 rupees as annual subscription

  @BookFlight
  Scenario Outline: I want to go on a Vacation with Friends
    Given We have vacation days
    And We want to go on multiple destination holidays
    And We are 3 friends
     |Friend 1|Friend 2|Friend 3|
     |Rohan   | Mohan  | Sohan  |
     |20      |  30    |   40   |
    And We booked flight to <Destination> on <FromDate>
    And Return Flight on <ToDate>

    Examples: 
      | Destination  | FromDate     | ToDate        |
      | Tokyo        | 10th Dec 2019| 20th Dec 2019 |
      | Hawai        | 3rd Jan 2020 | 12th Jan 2020 |
      | Canada       | 2nd Feb 2020 | 18th Feb 2020 |
