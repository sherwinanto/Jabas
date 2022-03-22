package org.cmp;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefinition {
	WebDriver driver;
	@Given("user on facebook page")
	public void user_on_facebook_page() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
		System.out.println("hi");
	}

	@When("User enters {string} and {string}")
	public void user_enters_and(String email, String pass) {
	    WebElement txtmail = driver.findElement(By.id("email"));
	    txtmail.sendKeys(email);
	    WebElement txtPass = driver.findElement(By.id("pass"));
	    txtPass.sendKeys(pass);
	}


	@When("click login button")
	public void click_login_button() {
		WebElement btnlog = driver.findElement(By.name("login"));
		btnlog.click();
	}

	@Then("Error page displayed")
	public void error_page_displayed() {
		System.out.println("error page");
	}


	}


