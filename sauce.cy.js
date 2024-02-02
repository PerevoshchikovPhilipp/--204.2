var number = "89090501963";
var name = "Philipp";
var fname = "Philipp";
var lname = "Perevoshchikov";
var email = "filip124567@gmail.com";
var pas = "123";
var address = "PUSHKINSKAYA";
var state = "Izhevsk";
var city = "Izhevsk";
var zipcode = "460000"
describe('Test', () => { 
    beforeEach(() => { 
   
      cy.visit('https://www.automationexercise.com/'); 
    }) 

      it('Register', () => { 
      cy.get('.fa.fa-lock').click();
      cy.get('input[name="name"]').type(name);
      cy.get('input[name="email"]').last().type(email);
      cy.get('.btn.btn-default').eq(1).click();
      cy.get('input[name="password"]').type(pas);
      cy.get('input[name="first_name"]').type(fname);
      cy.get('input[name="last_name"]').type(lname);
      cy.get('input[name="address1"]').type(address);
      cy.get('input[name="state"]').type(state);
      cy.get('input[name="city"]').type(city);
      cy.get('input[name="zipcode"]').type(zipcode);
      cy.get('input[name="mobile_number"]').type(number);
      cy.get('.btn.btn-default').first().click();
      cy.get('.btn.btn-primary').click();  
      cy.get('.fa.fa-lock').click();  
    });   

    it('Login', () => { 
      cy.get('.fa.fa-lock').click();
      cy.get('input[name="password"]').type(pas);
      cy.get('input[name="email"]').first().type(email);
      cy.get('.btn.btn-default').eq(0).click();
      cy.get('.fa.fa-lock').click();  
      cy.get('.logo.pull-left').click(); 
    }); 
    
    it('Adding and removing items from the cart', () => { 
      cy.get('.fa.fa-lock').click();
      cy.get('input[name="password"]').type(pas);
      cy.get('input[name="email"]').first().type(email);
      cy.get('.btn.btn-default').eq(0).click();
      cy.get('.material-icons.card_travel').click();
      cy.get('.fa.fa-plus-square').eq(0).click();
      cy.get('.btn.btn-default.cart').first().click();
      cy.get('.btn.btn-success.close-modal.btn-block').click();
      cy.get('.fa.fa-shopping-cart').first().click();
      cy.get('.cart_quantity_delete').click();
      cy.get('.logo.pull-left').click(); 
      cy.get('.fa.fa-lock').click();  
      cy.get('.logo.pull-left').click(); 
    });     

    it('Navigation by product categories', () => { 
      cy.get('.fa.fa-lock').click();
      cy.get('input[name="password"]').type(pas);
      cy.get('input[name="email"]').first().type(email);
      cy.get('.btn.btn-default').eq(0).click();
      cy.get('.material-icons.card_travel').click();
      cy.get('.pull-right').eq(1).click();
      cy.get('.pull-right').eq(2).click();
      cy.get('.pull-right').eq(3).click();
      cy.get('.logo.pull-left').click(); 
      cy.get('.fa.fa-lock').click();  
      cy.get('.logo.pull-left').click(); 
    });    

      
      it('Account deleting', () => { 
      cy.get('.fa.fa-lock').click();
      cy.get('input[name="password"]').type(pas);
      cy.get('input[name="email"]').first().type(email);
      cy.get('.btn.btn-default').eq(0).click();
      cy.get('.fa.fa-trash-o').click();
      cy.get('.btn.btn-primary').first().click();
      });
});