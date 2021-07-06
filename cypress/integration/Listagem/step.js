/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let Chance = require('chance');
let chance = new Chance();


Given(/^Que site não possui Registros - WebTable$/, () => {
    cy.intercept(
        'GET', 
        '**/api/1/databases/userdetails/collections/newtable?**', {
        statusCode: 200,
        response: 'fixture: webtable-get-vazio',
        body: {}
    }).as('getNewtable');
});

When(/^Acessar a Listagem$/, () => {
    cy.visit('WebTable.html')
});

Then(/^Devo visualizar a listagem vazia$/, () => {
	cy.get('div[role=row]').should('have.length', 1)
});



Given(/^Que o site possui apenas um Registro$/, () => {
    cy.intercept(
        'GET', 
        '**/api/1/databases/userdetails/collections/newtable?**', {
        statusCode: 200,
        response: 'fixture: webtable-get-unico',
        body: 
            [{
                "_id":{
                    "$oid":"5bbcad731f6e4f0840a1b062"
                },
                "FirstName": "Juan",
                "LastName": "Sepulveda",
                "Email": "juan@email.com",
                "Phone" : "3129876543",
                "Gender": "Male"
            }]
        
    })

});

When(/^Acessar a listagem$/, () => {
	cy.visit('WebTable.html')
});

Then(/^Devo visualizar apenas um registro$/, () => {
    cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone')
    cy.get('@gridCellPhone').should('contain.text', "3129876543" )
});

