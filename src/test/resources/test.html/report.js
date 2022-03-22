$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sharm/OneDrive/Desktop/eclipse/CucumberTopic/src/test/resources/sherwin.feature");
formatter.feature({
  "name": "Verify facebook login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify login functionality for valid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user on facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_on_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters name",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.error_page_displayed()"
});
formatter.result({
  "status": "passed"
});
});