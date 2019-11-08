package basics.cucumber;

import java.util.List;
import java.util.Map;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Practice {
	
	    @Given("^I want to learn ([^\"]*)$")
	    public void I_want(String sport) {
	    	System.out.println("I want to learn : " + sport);
	    }
	    
	    @And("^I ([a-zA-Z]{1,}) about MMA Classes$")
	    public void I_Googled(String searchengine) {
	    	System.out.println("I " + searchengine + "about MMA Classes");
	    }
	    
	    @When("^I visited the URL of ([a-zA-Z0-9]{1,})$")
	    public void I_visited(String AlphaNumeric) {
	    	System.out.println("I visited the URL of :" + AlphaNumeric);
	    }
	    
	    @And("^I registered myself online for (\\d+) Demo Classes$")
	    public void I_registered(int numberOfDays, List<Map<String, String>>names) {
	    	System.out.println("I registered myself online for" + numberOfDays + " Demo Classes" + names.toString());
	    }
	    
	    @Then("^I was so ([^\"]*)$") 
	    public void I_was(String opinion) {
	    	System.out.println("I was so :" + opinion);
	    }
	    
	    @And("^I paid (\\d+) rupees for an annual membership starting from ([^\"]*) to ([^\"]*)$")
	    public void I_paid(int amount, String fromDate, String toDate) {
	    	System.out.println("I paid "+ amount + "rupees for an annual membership starting from " + fromDate + "to " + toDate);
	    }
	    
	    @When("^(\\d+) of my friends saw my interest$")
	    public void my_friends(int totalfriends, List<Map<String, String>>friendsnames) {
	    	System.out.println(totalfriends +" of my friends saw my interest" + friendsnames.toString());
	    }
	    
	    @Then("^They also took (\\d+) year membership$")
	    public void They_also(int tenure){
	    	System.out.println("They also took " + tenure + "year membership");
	    }
	    
	    @But("^They had to pay (\\d+) rupees as annual subscription$")
	    public void They_had(int discountprice) {
	    	System.out.println("They had to pay :" + discountprice + "rupees as annual subscription");
	    }
	    
	    @Given("^We have ([^\"]*) days$")
	    public void We_have(String leisure) {
	    	System.out.println("We have" + leisure + "days");
	    }
	    
	    @And("^We want to go on multiple ([a-zA-Z0-9]{1,}) holidays$")
	    public void We_want(String places) {
	    	System.out.println("We want to go on multiple" + places + " holidays");
	    }
	    
	    @And("^We are (\\d+) friends$")
	    public void We_are(int numberoftravelfriends, List<Map<String, String>>travelfriends) {
	    	System.out.println("We are :" +numberoftravelfriends + "friends" + travelfriends.toString());
	    }
	    
	    @And("^We booked flight to ([^\"]*) on ([^\"]*)$")
	    public void We_booked(String Destination, String FromDate) {
	    	System.out.println("We booked flight to :"+ Destination + "on :" + FromDate);
	    }
	    
	    @And("^Return Flight on ([^\"]*)$")
	    public void Return_Flight(String ToDate) {
	    	System.out.println("Return Flight on 20th Dec 2019 :" + ToDate);
	    }

}
