$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sharm/OneDrive/Desktop/eclipse/CucumberTopic/src/test/resources/sherwin.feature");
formatter.feature({
  "name": "Verify facebook login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify login functionality for valid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on facebook page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "name": "Error page displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "anto",
        "sherwin"
      ]
    },
    {
      "cells": [
        "anto1",
        "sherwin1"
      ]
    },
    {
      "cells": [
        "anto2",
        "sherwin2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify login functionality for valid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_on_facebook_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"anto\" and \"sherwin\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Error page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.error_page_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify login functionality for valid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_on_facebook_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"anto1\" and \"sherwin1\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Error page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.error_page_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify login functionality for valid username and invalid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_on_facebook_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"anto2\" and \"sherwin2\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Error page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.error_page_displayed()"
});
formatter.result({
  "status": "skipped"
});
});