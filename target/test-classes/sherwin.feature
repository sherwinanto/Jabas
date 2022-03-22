Feature:  Verify facebook login functionality
Scenario Outline: Verify login functionality for valid username and invalid password
Given user on facebook page
When User enters "<username>" and "<password>"  
And click login button
Then Error page displayed
Examples:
@anto
 |username|password|
 |anto|sherwin|
 |anto1|sherwin1|
 |anto2|sherwin2|
 
@sherwin
 |username|password|
 |anto|sherwin|
 |anto1|sherwin1|
 |anto2|sherwin2|


