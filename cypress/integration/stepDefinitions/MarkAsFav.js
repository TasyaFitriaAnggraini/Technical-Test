import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.themoviedb.org/"

// User tries to mark an item as favorite when not logged in
Given('I am is not logged in and on the homepage', () => {
    cy.visit(url)
})
When('I clicks on the icon ellipsis', () => {
    cy.get('#trending_scroller > div > div:nth-child(1) > div.image > div.options', { timeout: 1000 }).should('exist').should('be.visible').trigger('click')
})
Then('I am must be logged in',() => {
    cy.get('#trending_scroller > div > div:nth-child(1) > div.image > div.options', { timeout: 5000 }).should('exist').should('be.visible').trigger('click')
    cy.get('body > div.k-animation-container > div > div.k-tooltip-content > div > div.group.no_pad > p:nth-child(2) > a', { timeout: 5000 }).should('exist').should('be.visible').trigger('click')
    cy.visit('https://www.themoviedb.org/login')
})

// User marks an item as favorite when logged in
Given('I am logged in and navigate on the homepage',() => {
    cy.visit(url)
})
When('I click on the login button',() => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click()
    cy.visit('https://www.themoviedb.org/login')
})
When('I input valid a email and password successfully logged in',() => {
    cy.get('#username').type('tasyafang_')
    cy.get('#password').type('Testing123')
    cy.get('#login_button').click()
})
When('I click on the TMBD button',() => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.nav_wrapper > a').click()
    cy.visit('https://www.themoviedb.org/')
    cy.wait(5000)
})
When('I click on the icon ellipsis at film', () => {
    cy.get('#trending_scroller > div > div:nth-child(1) > div.image > div.options', { timeout: 100000 }).should('exist').should('be.visible').trigger('click')
})
Then('I click option favorite at film successfully added', () => {
    cy.get('#trending_scroller > div > div:nth-child(1) > div.image > div.options', { timeout: 100000 }).should('exist').should('be.visible').trigger('click')
    cy.get('body > div.k-animation-container > div > div.k-tooltip-content > div > div:nth-child(2) > p > a', { timeout: 100000 }).should('exist').should('be.visible').trigger('click')
    cy.screenshot()
})

// When user "mark as favorite" film will saved favorite movies section in the user profile
Given('I am navigate on the homepage',() => {
    cy.visit(url)
})
When('I am click on the login button',() => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li:nth-child(3) > a').click()
    cy.visit('https://www.themoviedb.org/login')
})
When('I input email and password successfully logged in',() => {
    cy.get('#username').type('tasyafang_')
    cy.get('#password').type('Testing123')
    cy.get('#login_button').click()
    cy.wait(5000)
})
When('I am click on the TMBD button',() => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.nav_wrapper > a').click()
    cy.visit('https://www.themoviedb.org/')
})
When('I am click on the icon ellipsis at film', () => {
    cy.get('#trending_scroller > div > div:nth-child(1) > div.image > div.options', { timeout: 100000 }).should('exist').should('be.visible').trigger('click')
})
When('I am click option favorite at film', () => {
    cy.get('#trending_scroller > div > div:nth-child(1) > div.image > div.options', { timeout: 100000 }).should('exist').should('be.visible').trigger('click')
    cy.get('body > div.k-animation-container > div > div.k-tooltip-content > div > div:nth-child(2) > p > a', { timeout: 10000 }).should('exist').should('be.visible').trigger('click')
    cy.wait(5000)
    cy.visit('https://www.themoviedb.org/')
    cy.wait(5000)
})
When('I click profile section for check favorite movies list', () => {
    cy.get('body > div.page_wrap._wrap > header > div.content > div > div.flex > ul > li.user > a > span', { timeout: 100000 }).should('exist').should('be.visible').should('not.be.hidden').debug().trigger('click')
    cy.get('div.k-animation-container div.k-tooltip-content div.settings_content div.group h2 a[href="/u/tasyafang_"').should('exist').should('be.visible').should('not.be.hidden').debug().realClick()
    cy.wait(5000)
})
