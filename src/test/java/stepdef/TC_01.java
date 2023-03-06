package stepdef;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

import org.testng.Assert;

public class TC_01 {
	
	WebDriver driver;
	WebDriverWait wait;
	
	@When("^user navigate to the url \"([^\"]*)\"$")
	public void user_navigate_to_the_url(String arg1) throws Throwable {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get(arg1);
	   
	}

	@And("^user enters emailaddress and password$")
	public void user_enters_emailaddress_and_password() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("admin@presta.com");
		driver.findElement(By.id("passwd")).sendKeys("Welcome123");
		
	    
	}
	@And("^user clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		driver.findElement(By.id("submit_login")).click();
	}

	@Then("^user should be on the dashboard page$")
	public void user_should_be_on_the_dashboard_page() throws Throwable {
		wait = new WebDriverWait(driver,30);
		String actual = wait.until(ExpectedConditions.presenceOfElementLocated
				(By.xpath("//ul[@class='breadcrumb page-breadcrumb']//following-sibling::h1"))).getText();
		Assert.assertEquals(actual, "Dashboard");
	}
	@When("^user clicks on the Add new order button$")
	public void user_clicks_on_the_Add_new_order_button() throws Throwable {
		wait = new WebDriverWait(driver,40);
		wait.until(ExpectedConditions.presenceOfElementLocated
				(By.xpath("//i[text()='shopping_basket']//following-sibling::span"))).click();
		wait.until(ExpectedConditions.presenceOfElementLocated
				(By.xpath("//ul[@id='collapse-3']//li[@id='subtab-AdminOrders']//a"))).click();
		driver.findElement(By.xpath("//a[@title='Add new order']//following-sibling::i")).click();
	    
	}
	@And("^the user search for the customer$")
	public void the_user_search_for_the_customer() throws Throwable {
		driver.findElement(By.id("customer-search-input")).sendKeys("john deo");
	    
	}

	@Then("^the user should see customer details$")
	public void the_user_should_see_customer_details() throws Throwable {
		String email = wait.until(ExpectedConditions.presenceOfElementLocated
				(By.xpath("//div[@class='row js-customer-search-results']//p[@class='mb-0 js-customer-email']"))).getText();
		Assert.assertEquals(email, "pub@prestashop.com");
		
	}
	@And("^close the driver$")
	public void close_the_driver() throws Throwable {
	    driver.quit();
	}


	
}