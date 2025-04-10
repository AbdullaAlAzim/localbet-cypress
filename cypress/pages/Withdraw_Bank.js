
export class Withdraw_Bank {

    /**
     *
     *
     *  Withdraw_Bank
     */

    Withdraw_Bank_with_Valid_Data() {
         
      //windraw Fund
      cy.xpath("//a[contains(text(), 'Withdraw Funds')]")
      .should('be.visible')
      .click({ multiple: true, force: true });
        cy.xpath("//a[contains(text(), 'Withdraw Funds')]") // Adjust to the selector of the new element
      .should('exist'); // Assert the new element exists in the DOM


      //Withdraw Accounts
      cy.xpath("//a[contains(text(), 'Withdraw Accounts')]")
      .should('be.visible')
      .click({ multiple: true, force: true });
       cy.xpath("//a[contains(text(), 'Withdraw Accounts')]") // Adjust to the selector of the new element
      .should('exist'); // Assert the new element exists in the DOM

      //Add Account
      cy.xpath("//span[contains(text(), 'Add Account')]")
      .should('be.visible')
      .click({ multiple: true, force: true });
       cy.xpath("//span[contains(text(), 'Add Account')]") // Adjust to the selector of the new element
      .should('exist'); // Assert the new element exists in the DOM


       // Wait for the element to be visible and then click it
       cy.get(':nth-child(2) > .mb-6 > .flex-wrap > :nth-child(2)')
       .should('be.visible')  // Waits until the element is visible
       .wait(2000)  // Optional: Wait for an additional 1 second if necessary
       .click({ multiple: true, force: true });


        cy.get('#bankAccName', { timeout: 10000 }).should('be.visible').type('Taylor Swift');

        cy.get('#bankBranch', { timeout: 10000 }).should('be.visible').type('New York City');


     const generateRandomNumber = (length) => {
            const min = Math.pow(10, length - 1); // Smallest number with the given length
            const max = Math.pow(10, length) - 1; // Largest number with the given length
            return Math.floor(min + Math.random() * (max - min + 1)); // Random number within that range
    }
  
    const randomNumber = generateRandomNumber(10);
     //Bank number
    cy.get('#bankAccNumber', { timeout: 10000 })
    .should('be.visible')
    .type(randomNumber.toString()); // Convert the number to string for typing
  
  
  //swift code number generator
    const generateRandomNumberr = (length) => {
        const min = Math.pow(10, length - 1); // Smallest number with the given length
        const max = Math.pow(10, length) - 1; // Largest number with the given length
        return Math.floor(min + Math.random() * (max - min + 1)); // Random number within that range
    }
    const randomNumberr = generateRandomNumberr(7);
    cy.get('#bankSwift', { timeout: 10000 }).should('be.visible').type(randomNumberr.toString());
    //district Name
    cy.get('#bankDistrict', { timeout: 10000 }).should('be.visible').type('United State Of America');
    //Routing Number
    const generateRautingNumberr = (length) => {
        const min = Math.pow(10, length - 1); // Smallest number with the given length
        const max = Math.pow(10, length) - 1; // Largest number with the given length
        return Math.floor(min + Math.random() * (max - min + 1)); // Random number within that range
    }
    const routingNumberr = generateRautingNumberr(5);
    cy.get('#bankRoutingNumber', { timeout: 10000 }).type(routingNumberr.toString());

    
 //Ibn Number Generator
 const generateRandomAlphaNumericString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
    let result = ''; 
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex]; 
    }
    return result; 
  }
  const randomString = generateRandomAlphaNumericString(30);
  cy.get('#bankIban', { timeout: 10000 })
    .should('be.visible')
    .type(randomString); 
    //add bank account button
    cy.get('.ant-form-item-control-input-content > .ant-btn > span', { timeout: 10000 })
    .click({ force: true }) // Click the element
    .should('be.visible');   // Assert that the element is visible


    const ottpe="123456"
    function eenterOtpe() {
      // Iterate over each character of the OTP and type it into the corresponding input field
      ottpe.split('').forEach((digit, index) => {
          cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
              .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
      });
    }
   eenterOtpe();

   cy.wait(2000);

   cy.get('.ant-form-item-control-input-content > .ant-btn').click({ multiple: true, force: true });
   cy.contains('Successfully Added!')  // Find the text on the page
   .should('be.visible');  // Assert that the text is visible

   cy.get('.action-icon').click({ multiple: true, force: true });
   cy.wait(2000);

   cy.xpath("(//a[contains(text(), 'Withdraw Funds')])[1]")
   .should('be.visible')
   .click({ multiple: true, force: true });
   cy.wait(2000);
   cy.get('.deposit-tabs > :nth-child(2)').click({ multiple: true, force: true });

    cy.xpath("(//div[contains(@class, 'gateway-card')])[2]").click({ multiple: true, force: true });
    cy.wait(2000);

    cy.get('.ant-dropdown-trigger > .ant-typography')
   .should('be.visible')  // Ensure it's visible
   .click({ multiple: true, force: true })
   .should('be.visible'); // Assert it's still visible after click
   cy.wait(2000);

   cy.xpath("(//div[contains(@class, 'flex items-start gap-2')])[1]")
   .should('exist')
   .and('be.visible')
   .click({ multiple: true, force: true });
   cy.get('#amount', { timeout: 10000 }).should('be.visible').type('20');
   cy.wait(2000); // Wait for 1 second (adjust as needed)

   cy.get('.ant-form-item-control-input-content > .mb-2').click({ multiple: true, force: true });
   cy.get('.mb-8 > .ant-typography')
   .should('be.visible') // Assert that the element is visible
   .and('contain.text', 'Request Submitted Successfully!'); // Replace 'Expected Text' with the actual text you're looking for

   cy.wait(2000);
   cy.get('.success-footer > .ant-btn', { timeout: 20000 }) // Wait up to 2 minutes for the button to appear
     .click({ multiple: true, force: true });
   cy.wait(2000);
   cy.get('.pending-history > .ant-btn').click({multiple: true,force: true});
   cy.get(':nth-child(2) > .ant-btn > span').click();

   cy.wait(2000);
   cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
   cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click()


       
    }
  
}
  