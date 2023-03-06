$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tc01.feature");
formatter.feature({
  "line": 1,
  "name": "Presta",
  "description": "",
  "id": "presta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7534322029,
  "status": "passed"
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
  "duration": 2310322676,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.user_enters_emailaddress_and_password()"
});
formatter.result({
  "duration": 310820036,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 98973055,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.user_should_be_on_the_dashboard_page()"
});
formatter.result({
  "duration": 7048113834,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.user_clicks_on_the_Add_new_order_button()"
});
formatter.result({
  "duration": 4096095576,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.the_user_search_for_the_customer()"
});
formatter.result({
  "duration": 119497428,
  "status": "passed"
});
formatter.match({
  "location": "TC_01.the_user_should_see_customer_details()"
});
formatter.result({
  "duration": 567598888,
  "status": "passed"
});
formatter.after({
  "duration": 362467659,
  "status": "passed"
});
});