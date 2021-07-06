/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let Chance = require('chance');
let chance = new Chance();


When(/^Informar meus dados$/, () => {
	//type - digita texto em um campo
cy.get('input[placeholder="First Name"]').type(chance.first())
cy.get('input[ng-model^="LastName"]').type(chance.last())
cy.get('input[ng-model^="Email"]').type(chance.email())
cy.get('input[ng-model^="Phone"]').type(chance.phone({ formatted: false }))
//check -> radio's e checkboxes
cy.get('input[value="FeMale"]').check()
cy.get('input[type="checkbox"]').check('Cricket')
cy.get('input[type="checkbox"]').check('Hockey')

cy.get('select#Skills').select('Javascript')
cy.get('select#countries').select('Argentina')
cy.get('select#country').select('Australia', { force: true })
cy.get('select#yearbox').select('1996')
cy.get('select[ng-model^=month]').select('February')
cy.get('select#daybox').select('24')
cy.get('input#firstpassword').type('Agilizei@2021')
cy.get('input#secondpassword').type('Agilizei@2021')


cy.get('input#imagesrc').attachFile('screen.jpg')
});


When(/^Clicar em salvar$/, () => {
    cy.get('button#submitbtn').click()
});

Then(/^Deve ser cadastrado com sucesso$/, () => {
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

