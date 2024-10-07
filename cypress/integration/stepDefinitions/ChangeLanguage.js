import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.themoviedb.org/"

// Changed Language Indonesian When User Succesfully Login
Given('I am log in and navigate on the homepage',() => {
    cy.visit(url)
})
When('I click on the button login',() => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click()
    cy.visit('https://www.themoviedb.org/login')
})
When('I input valid a email and password successfully log in',() => {
    cy.get('#username').type('tasyafang_')
    cy.get('#password').type('Testing123')
    cy.get('#login_button').click()
    cy.wait(5000)
})
When('I click on the button TMBD',() => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.nav_wrapper > a').click()
    cy.visit('https://www.themoviedb.org/')
    cy.wait(5000)
})
When('I am click on the languange button', () => {
    cy.get('.translate', { timeout: 5000 }).click()
})
When('I am click language dropdown menu at default languange', () => {
    cy.get('.translate.k-state-border-down', { timeout: 5000 } ).click()
    cy.get('#default_language_popup_label > .k-widget > .k-dropdown-wrap > .k-select > .k-icon', { timeout: 100000 }).should('exist').should('be.visible').trigger('click')
})
When('I am selects Bahasa Indonesia from the list', () => {
    cy.get('#default_language_popup-list > div.k-list-scroller #default_language_popup_listbox li[data-offset-index="34"]').should('have.length', 1).trigger('click', { force: true })
})
Then('I am click on reload page button and display content in Bahasa Indonesia', () => {
    cy.get('p.refresh > a.no_click.button.rounded.upcase', { timeout: 100000 }).click()
    cy.reload(true);
    cy.wait(5000)
    cy.get('#media_v4 > div > div > div.title > h2').should('have.text', 'Selamat datang')
    cy.screenshot()
})

// Changed Language Indonesia to Inggris When User Succesfully Login
Given('I am loggged in and navigatee on the homepage',() => {
    cy.visit(url)
})
When('I click on the button loginn',() => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click()
    cy.visit('https://www.themoviedb.org/login')
})
When('I input valid a email and password success log in',() => {
    cy.get('#username').type('tasyafang_')
    cy.get('#password').type('Testing123')
    cy.get('#login_button').click()
    cy.wait(5000)
})
When('I am clicked on the button TMBD',() => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.nav_wrapper > a').click()
    cy.visit('https://www.themoviedb.org/')
    cy.wait(5000)
})
When('I click on the translate button', () => {
    cy.get('.translate', { timeout: 5000 }).click()
})
When('I click language dropdown menu at default languange', () => {
    cy.get('.translate.k-state-border-down', { timeout: 5000 } ).click()
    cy.get('#default_language_popup_label > .k-widget > .k-dropdown-wrap > .k-select > .k-icon', { timeout: 10000 }).should('exist').should('be.visible').trigger('click')
})
When('I am selects Bahasa Inggris from the list', () => {
    // cy.get('#default_language_popup-list > div.k-list-scroller #default_language_popup_listbox li[data-offset-index="26"]').should('exist').should('be.visible').should('have.length', 1).trigger('click', { force: true })
    cy.get('#default_language_popup_label > .k-widget > .k-dropdown-wrap > .k-select > .k-icon', { timeout: 10000 }).should('exist').should('be.visible').trigger('click')
    cy.get('#default_language_popup-list > div.k-list-scroller', { timeout: 10000 }).should('exist').should('have.css', 'display', 'block');

    cy.get('#default_language_popup_listbox li[data-offset-index="26"]').should('exist').should('be.visible').click({ force: true });
    cy.wait(1000)
})
Then('I am click on reload page button and display content in Bahasa Inggris', () => {
    cy.get('p.refresh > a.no_click.button.rounded.upcase').click()
    cy.reload(true);
    cy.get('#media_v4 > div > div > div.title > h2').should('have.text', 'Welcome.')
    cy.screenshot()
})
