/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let Chance = require('chance');
let chance = new Chance();



Given(/^Que acesso o site$/, () => {
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
});




