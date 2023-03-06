$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/pallavisadhu/eclipse-workspace/Presta_cucumber/src/test/java/features/tc01.feature");
formatter.feature({
  "line": 1,
  "name": "Presta",
  "description": "",
  "id": "presta",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "verify dashboard page",
  "description": "",
  "id": "presta;verify-dashboard-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user navigate to the url \"http://3.130.25.128/administration/index.php/sell/orders/new?_token\u003deZQR-Oao8Cnq3TNjXuGqwGpzNbL36XqhSFIvg8JjXTU\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters emailaddress and password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be on the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on the Add new order button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user search for the customer",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user should see customer details",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the driver",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://3.130.25.128/administration/index.php/sell/orders/new?_token\u003deZQR-Oao8Cnq3TNjXuGqwGpzNbL36XqhSFIvg8JjXTU",
      "offset": 26
    }
  ],
  "location": "TC_01.user_navigate_to_the_url(String)"
});
formatter.result({
  "duration": 5277966887,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.user_enters_emailaddress_and_password()"
});
formatter.result({
  "duration": 304139623,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 102050860,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.user_should_be_on_the_dashboard_page()"
});
formatter.result({
  "duration": 4847196742,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.user_clicks_on_the_Add_new_order_button()"
});
formatter.result({
  "duration": 4141242199,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.the_user_search_for_the_customer()"
});
formatter.result({
  "duration": 121516548,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.the_user_should_see_customer_details()"
});
formatter.result({
  "duration": 561624622,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.close_the_driver()"
});
formatter.result({
  "duration": 373679055,
  "status": "passed"
});
});