Feature: Mark as Favorite

    As a user, I want to be able to mark as movies I like into favorite movie.
    Scenario: User tries to mark an film as favorite when not logged in
        Given I am is not logged in and on the homepage
        When I clicks on the icon ellipsis
        Then I am must be logged in
    
    Scenario: User marks an film as favorite when logged in
        Given I am logged in and navigate on the homepage
        When I click on the login button
        When I input valid a email and password successfully logged in
        When I click on the TMBD button
        When I click on the icon ellipsis at film
        Then I click option favorite at film successfully added
    
    Scenario: When user "mark as favorite" film will saved favorite movies section in the user profile
        Given I am navigate on the homepage
        When I am click on the login button
        When I input email and password successfully logged in
        When I am click on the TMBD button
        When I am click on the icon ellipsis at film
        When I am click option favorite at film
        When I click profile section for check favorite movies list
        Then I clik dropdown overview section and select favorite movie film


