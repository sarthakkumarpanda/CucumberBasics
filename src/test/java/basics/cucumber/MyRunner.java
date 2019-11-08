package basics.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		 dryRun = false,
		 strict = false,
		 monochrome = true,
		 features = {"src/test/resources"},
		 glue = {"basics.cucumber"},
		 plugin = {"pretty",
				   "html:target/site/cucumber-html",
				   "json:target/cucumber1.json"},
		 tags = {"not @EnquiryforMMA" , "@BookFlight"}
		) 

public class MyRunner {

}
