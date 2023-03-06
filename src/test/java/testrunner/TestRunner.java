package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/pallavisadhu/eclipse-workspace/Presta_cucumber/src/test/java/features/tc01.feature"
		,glue= {"stepdef"}
		,plugin={"pretty","html:target/html","json:target/report.json"}
		,monochrome=true,dryRun=false,strict=true
		
		
		)
public class TestRunner {

}
