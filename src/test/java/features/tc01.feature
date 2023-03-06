Feature: Presta


Scenario: verify dashboard page
When user navigate to the url "http://3.130.25.128/administration/index.php/sell/orders/new?_token=eZQR-Oao8Cnq3TNjXuGqwGpzNbL36XqhSFIvg8JjXTU"
And user enters emailaddress and password
And user clicks on the login button
Then user should be on the dashboard page
When user clicks on the Add new order button
And the user search for the customer
Then the user should see customer details
And close the driver


