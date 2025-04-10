
/**
 *
 *
 * @export
 * @class TransferPage
 */
export class TransferPage {

    Transfer_with_amount() {
       
        cy.xpath("//span[@class='ant-menu-title-content']/a[@href='/user/account/transfer']").click({ multiple: true, force: true });
        cy.xpath("//button[contains(@class, 'ant-btn') and contains(@class, 'ant-btn-primary') and span[text()='Transfer']]").click({ multiple: true, force: true });
        cy.wait(1000);
        cy.get('.ant-col.flex > .ant-btn > span').click();
        cy.wait(1000);
        const filePath = 'cypress/downloads/localbet-login-credential.txt';

        cy.readFile(filePath).then((text) => {
            // Assuming the text format is: "AccountId: <value> Password: <value>"
            const regex = /AccountId:\s*(\S+)\s*Password:\s*(\S+)/;
            const matches = text.match(regex);
            if (matches && matches.length >= 3) {
              const accountId = matches[1];
              
            cy.wait(1000);

            cy.get('#beneficiaryUserUuid').type(accountId);
            cy.wait(1000);
            cy.get('.ant-select-item-option-content > .justify-between > :nth-child(2)').click()
            cy.wait(1000);
            cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()

        const otp="123456"
        function enterOtp() {
          // Iterate over each character of the OTP and type it into the corresponding input field
          otp.split('').forEach((digit, index) => {
              cy.get(`input[aria-label="Please enter OTP character ${index + 1}"]`)
                  .type(digit, { delay: 0 }); // Set delay to 0 for faster typing
          });
      }
      enterOtp();

        cy.get('.contact-info-verify-wrapper > .ant-form > :nth-child(2) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn > span').click({multiple:true, force:true});
        cy.xpath("//span[contains(text(), 'Transfer now')]").click({multiple:true, force:true});
        cy.get('#amount').type('100');
        cy.xpath("//button[contains(@class, 'ant-btn-primary') and span[text()='continue']]").click({multiple:true, force:true});
        cy.xpath("//span[normalize-space(text())='confirm transfer']").click({multiple:true, force:true});
        cy.get('#password').type("123456");
        cy.wait(2000)
        cy.xpath("//div[@class='ant-form-item-control-input-content']/button[1]").click({multiple:true, force:true});
        cy.get('.component-content > :nth-child(1) > .relative > .ant-typography')
        .should('contain.text', 'Amount Transfer Successfully!');

 // Step 1: Click on the "Remove" element (with multiple elements and force click option)
    cy.xpath("//*[name()='path' and contains(@d,'M512 64c24')]").click({ multiple: true, force: true});

    cy.wait(3000);  // Wait for modal to load
 
 // Wait for dynamic content to be fully loaded
    cy.xpath("//div[contains(@class, 'ant-modal-content')]")
        .should('exist')
        .and('be.visible');
 
 // Interact with the button after content is loaded
    cy.xpath("//button[contains(@class, 'ant-btn') and contains(@class, 'confirm-yes-btn')]")
        .should('exist')
        .and('be.visible')
        .click({ multiple: true, force: true });
 
   

     }
  })

    
  }

}

