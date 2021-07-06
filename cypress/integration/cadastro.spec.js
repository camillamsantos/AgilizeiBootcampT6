/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();



context('', () => {
    it('Cadastro de usuário no site', () => {

        cy.intercept('POST', '**/api/1/databases/userdetails/collections/newtable?**', {
            statusCode: 200,
            body: {}
        }).as('postNewtable');


        cy.intercept('POST', '**/api/1/databases/userdetails/collections/usertable?**', {
            statusCode: 200,
            body: {}
        }).as('postUsertable');

        cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**', {
            statusCode: 200,
            body: {}
        }).as('getNewtable');


        //baseUrl + Register.html - vai concatenar o endereço adicionado na baseurl com o texto inserido abaixo
        cy.visit('Register.html');

        //type - digita texto em um campo
        cy.get('input[placeholder="First Name"]').type(chance.first())
        cy.get('input[ng-model^="LastName"]').type(chance.last())
        cy.get('input[ng-model^="Email"]').type(chance.email())
        cy.get('input[ng-model^="Phone"]').type(chance.phone({ formatted: false }))
        //check -> radio's e checkboxes
        cy.get('input[value="FeMale"]').check()
        cy.get('input[type="checkbox"]').check('Cricket')
        cy.get('input[type="checkbox"]').check('Hockey')
        // cy.get('div#msdd')
        //     .click()
        // cy.get(':nth-child(29) > .ui-corner-all').contains('Portuguese').click()


        //select ->  select & select2 (combos)
        cy.get('select#Skills').select('Javascript')
        cy.get('select#countries').select('Argentina')
        cy.get('select#country').select('Australia', { force: true })
        cy.get('select#yearbox').select('1996')
        cy.get('select[ng-model^=month]').select('February')
        cy.get('select#daybox').select('24')
        cy.get('input#firstpassword').type('Agilizei@2021')
        cy.get('input#secondpassword').type('Agilizei@2021')


        cy.get('input#imagesrc').attachFile('screen.jpg')
        //click
        cy.get('button#submitbtn').click()

        cy.wait('@postNewtable').then((resNewtable) => {
            expect(resNewtable.response.statusCode).to.eq(200)
        })

        cy.wait('@postUsertable').then((resUsertable) => {
            expect(resUsertable.response.statusCode).to.eq(200)
        })

        cy.wait('@getNewtable').then((getNewtable) => {
            expect(getNewtable.response.statusCode).to.eq(200)
        })

        cy.url().should('contain', 'WebTable')

    });

});

//elementos
//input[placeholder="First Name"]
//input[ng-model^="LastName"]
//input[ng-model^="Email"]
//input[ng-model^="Phone"]
//input[value="FeMale"]
//input[type="checkbox"]

//select#Skills
//select#countries
//select#country
//select#yearbox
//select[ng-model^=month]
//select#daybox

//input#firstpassword
//input#secondpassword