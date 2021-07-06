/// <reference types="cypress" />

context('Listagem', () => {

    it('Listagem sem Registros', () => {

        cy.intercept(
            'GET', 
            '**/api/1/databases/userdetails/collections/newtable?**', {
            statusCode: 200,
            response: 'fixture: webtable-get-vazio',
            body: {}
        }).as('getNewtable');
        
        cy.visit('WebTable.html')
        cy.get('div[role=row]').should('have.length', 1)

    });
    it('Listagem com Apenas um Registro', () => {
        
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
        
        cy.visit('WebTable.html')
        
        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone')
        cy.get('@gridCellPhone').should('contain.text', "3129876543" )

        //1 -> .first()
        //2
        //3
        //4 -> .eq(3)
        //5 -> .last()
        

  
        
    });

    
});

