describe('Login Page Test', () => {
   
it('Complete Task 2', () => {
    cy.visit('http://localhost:8000/');
    cy.contains('Book Tour').eq(0).click();
    
    cy.get('.ivu-input-type-number > .ivu-input').type('1');
    cy.get('.ivu-input-type-text > .ivu-input').type('Marjory');
    cy.get('.ivu-input-type-email > .ivu-input').type('mar@yahoo.com');
    cy.get(':nth-child(3) > .ivu-modal > .ivu-modal-content > .ivu-modal-footer > .ivu-btn-primary').click();
    cy.wait(10000);
    cy.contains(' Booking made successfully').should('be.visible');
    cy.get(':nth-child(5) > .ivu-modal > .ivu-modal-content > .ivu-modal-footer > .ivu-btn-primary').click();
    

    //Invalid Login attempt-Error message displayed
    cy.get('[href="http://localhost:8000/login"]').click();
    cy.wait(5000);
    cy.get('#email').type('admins@account.com'); 
    cy.get('#password').type('password'); 
    cy.get('.inline-flex').click();
    cy.wait(20000);
    cy.contains('These credentials do not match our records.', { timeout: 10000 }).should('be.visible');

    //valid Login attempt-Error message displayed
    cy.wait(5000);
    cy.get('#email').clear().type('admin@account.com');  
    cy.get('#password').clear().type('password');  
    cy.get('.inline-flex').click();
    cy.wait(10000);
    cy.contains(' Dashboard').should('be.visible');
    
     //create new tour destinations
     cy.get(':nth-child(6) > .inline-flex').click();
     cy.get('.mt-2 > .ivu-btn').click();
     cy.get(':nth-child(1) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input').type('Turkwel');
     cy.get(':nth-child(2) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input').type('Serene place with magical prices')
     cy.get('.ivu-select-placeholder').click();
     cy.contains('.ivu-select-item', 'Bali').click(); 
     cy.get(':nth-child(4) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input').type('350');
     cy.get(':nth-child(5) > .ivu-form-item-content > .ivu-input-wrapper > .ivu-input').type('96');
     cy.get('.demo-drawer-footer > .ivu-btn-primary').click();

     // View Bookings
     cy.get('.justify-between > :nth-child(1) > :nth-child(3) > .inline-flex').click();
     cy.get('.py-12 > .max-w-7xl').scrollIntoView();

     //view tickets
     cy.get(':nth-child(4) > .inline-flex').click();
     cy.get('.py-12').scrollIntoView();
   });
});