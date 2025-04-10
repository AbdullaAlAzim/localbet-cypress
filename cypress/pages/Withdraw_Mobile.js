
export class Withdraw_Mobile {

  /**
   * Withdraw_Mobile
   */
  Withdraw_Mobile_with_Valid_Data() {
       
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
      cy.get('.scrollbar > .payment-gateway-container > :nth-child(1) > .mb-6 > .flex-wrap > :nth-child(3)')
      .should('be.visible')  // Waits until the element is visible
      .wait(2000)  // Optional: Wait for an additional 1 second if necessary
      .click({ multiple: true, force: true });

         // Generate a random Bangladeshi phone number
          const generateBangladeshiPhoneNumber = () => {
          const prefixes = ['013', '014', '015', '016', '017', '018', '019'];
          const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
          const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generates an 8-digit number
          return randomPrefix + randomNumber;
      }
      
      const phoneNumber = generateBangladeshiPhoneNumber();
      cy.get('#mobileNumber').type(phoneNumber);
      cy.get('.ant-form-item-control-input-content > .ant-btn').click({ multiple: true, force: true });


      const ottp="123456"
      function eenterOtp() {
        // Iterate over each character of the OTP and type it into the corresponding input field
        ottp.split('').forEach((digit, index) => {
            cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
                .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
        });
    }
    eenterOtp();

    cy.wait(2000);
    cy.get('.ant-form-item-control-input-content > .ant-btn').click({ multiple: true, force: true });
    cy.contains('Successfully Added!')  // Find the text on the page
    .should('be.visible');  // Assert that the text is visible
    // Assert that the element contains the text
    cy.get('.action-icon').click({ multiple: true, force: true });

    cy.wait(2000);
    cy.xpath("(//a[contains(text(), 'Withdraw Funds')])[1]")
      .should('be.visible')
      .click({ multiple: true, force: true });

     cy.wait(3000);
       cy.xpath("(//a[contains(text(), 'Withdraw Funds')])[1]") // Adjust to the selector of the new element
      .should('exist'); // Assert the new element exists in the DOM
      cy.xpath("(//div[@class='flex flex-col items-center justify-center payment-gateway-info'])[3]").click({ multiple: true, force: true });

     
      cy.get('.ant-dropdown-trigger > .ant-typography')
      .should('be.visible')  // Ensure it's visible
      .click({ multiple: true, force: true })
      .should('be.visible'); // Assert it's still visible after click
      cy.wait(2000);

      cy.xpath("(//div[@class='flex items-center gap-2'])[2]")
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
     cy.get('.success-footer > .ant-btn', { timeout: 40000 }) // Wait up to 2 minutes for the button to appear
     .click({ multiple: true, force: true });
     cy.wait(2000);
      cy.get('.pending-history > .ant-btn').click({multiple: true,force: true});
      cy.get(':nth-child(2) > .ant-btn > span').click()

        cy.wait(2000);
        cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
        cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click()
    
   
     
  }

}
