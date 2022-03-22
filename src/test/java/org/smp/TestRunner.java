package org.smp;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\sharm\\OneDrive\\Desktop\\eclipse\\CucumberTopic\\src\\test\\resources\\sherwin.feature",glue="org.cmp.StepDefinition",monochrome=true,snippets=SnippetType.CAMELCASE,tags="@anto")
public class TestRunner  {

}
//json:src\\test\\resources\\fb.json