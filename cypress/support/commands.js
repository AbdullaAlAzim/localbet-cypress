require('cypress-xpath');
import { faker } from '@faker-js/faker';
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
// Cypress.Commands.add('generateRandomData', () => {
//   const operatorCode = faker.helpers.arrayElement(['3', '4', '5', '6', '7', '8', '9']); 
//   const phoneNumber = `+8801${operatorCode}${faker.number.numeric(8)}`;
  
//   return {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//     phoneNumber: phoneNumber,
//   };
// });

Cypress.Commands.add("login", (username, password) => {
    cy.visit(Cypress.env('baseUrl'));    
    cy.get(".login-btn").click({multiple:true, force:true});
    cy.wait(2000)
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();
    cy.url().should('eq', 'https://dev-user.localbet.xyz/') 
    cy.wait(2000)
  });


  Cypress.Commands.add("oneClick_data_with_login", () => {

    cy.oneClickRegistration();
    cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
    cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click();   
    // Define the file path
    const filePath = 'cypress/downloads/localbet-login-credential.txt';
  
    // Read the file and chain the commands to use extracted credentials
    cy.readFile(filePath).then((text) => {
      // Assuming the text format is: "AccountId: <value> Password: <value>"
      const regex = /AccountId:\s*(\S+)\s*Password:\s*(\S+)/;
      const matches = text.match(regex);
  
      if (matches && matches.length >= 3) {
        const accountId = matches[1];
        const password = matches[2];
        cy.wait(1000);      
  
        // Interact with the login form
        cy.get(".login-btn").click({ multiple: true, force: true });
        cy.wait(2000);
        cy.get("#username").type(accountId);
        cy.get("#password").type(password);
        cy.get("button[type='submit']").click();
      } else {
        throw new Error("Failed to extract account ID and password from the file.");
      }
    });
  });
  
  
  Cypress.Commands.add('oneClickRegistration', function() {
    cy.visit(Cypress.env('baseUrl')); 

    cy.get('.signup-btn').click({ multiple: true, force: true });
    cy.wait(1000);
    cy.xpath(
      "//span[@class='ant-select-selection-item']/div/div/div/img[@alt='flag-icon']"
    ).click();
    // Ensure the input field exists and force typing "Bangladesh" into it
    cy.xpath("//input[@id='countryUuid']")
      .should("exist")
      .type("Bangladesh", { force: true });

    cy.xpath("//div[@class='ant-select-selector']//input[@id='currencyUuid']").click({multiple:true,force:true});

    cy.xpath("//input[@id='currencyUuid']")
    .should("exist")
      .type("BDT", { force: true });

    cy.xpath("//button[@type='submit' and .//span[text()='sign up ']]").click();
    cy.wait(1000);
    cy.get(".signup-confirmation-container > :nth-child(1) > .ant-typography").should('have.text', 'Thank you for Registration');
    cy.wait(2000);
    cy.xpath("(//div[@class='download-icon flex items-center justify-center'])[2]/img[@alt='Download']").click();
    cy.wait(1000);
    cy.xpath("//div[@class='action-icon flex justify-center items-center']//*[name()='svg']").click();
    cy.wait(1000);
});

 
