Feature: Change Language Functionality TMbd

    As a user, I want to be able to change the language
    Scenario: User Changes Language from English to Indonesia When User Succesfully LoggedIn
        Given I am log in and navigate on the homepage
        When I click on the button login
        When I input valid a email and password successfully log in
        When I click on the button TMBD
        When I am click on the languange button
        And I am click language dropdown menu at default languange
        And I am selects Bahasa Indonesia from the list
        Then I am click on reload page button and display content in Bahasa Indonesia

    Scenario: User Changes Language from Indonesian to English
        Given I am loggged in and navigatee on the homepage
        When I click on the button loginn
        When I input valid a email and password success log in
        When I am clicked on the button TMBD
        When I click on the translate button
        And I click language dropdown menu at default languange
        And I am selects Bahasa Inggris from the list
        Then I am click on reload page button and display content in Bahasa Inggris
