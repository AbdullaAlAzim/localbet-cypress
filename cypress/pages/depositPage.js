export class DepositPage{

    deposit_with_valid_data(){
        cy.oneClickRegistration();
        //cy.login('azim@softic.ai', '111111');
        cy.get('.gap-4 > .gap-3').click();  //click on profile icon
        cy.get('[href="/user/profile/personal-information"]').click(); //click on my profile option
        cy.wait(1000);
        cy.xpath("//span[@class='ant-menu-title-content']/a[@href='/user/account/deposit']").click(); //click on deposit menu
        cy.wait(1000);
        cy.xpath("(//div[contains(@class, 'gateway-card payment-gateway-card flex flex-col justify-center items-center cursor-pointer relative')])[2]").click() //click on payment gateway second index
         
        // Generate a random Bangladeshi phone number
         const generateBangladeshiPhoneNumber = () => {
            const prefixes = ['013', '014', '015', '016', '017', '018', '019'];
            const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generates an 8-digit number
            return randomPrefix + randomNumber;
        }
        // Function to generate a random string of specified length
            function generateRandomString(length) {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                const charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }


        const randomTransactionId = generateRandomString(16);
        const phoneNumber = generateBangladeshiPhoneNumber();
        const randomAmount = Math.floor(Math.random() * (5000 - 100 + 1)) + 100;

        cy.get('#mobileNumber').type(phoneNumber);
        cy.get('#mobileTrxId').type(randomTransactionId);
        cy.get('#amount').type(randomAmount);
        cy.get('.ant-form-item-control-input-content > .mb-2').click();
        cy.wait(1000);
        cy.get('.success-footer > .ant-btn').click();

        // #Delete deposit request
        //cy.get('.pending-history > .ant-btn').click({multiple: true,force: true});
        //cy.get(':nth-child(2) > .ant-btn > span').click()

         // logout 
       cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click(); //click on profile icon
       cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click() //click on logout
       cy.wait(2000);
        
        };


    deposit_with_bank(){
        //cy.oneClickRegistration();
        cy.readFile_data_with_login();
        cy.get('.gap-4 > .gap-3').click();
        cy.get('[href="/user/profile/personal-information"]').click();
        cy.wait(1000);
        cy.xpath("//span[@class='ant-menu-title-content']/a[@href='/user/account/deposit']").click(); //click on deposit menu
        cy.get('.deposit-tabs > :nth-child(2)').click(); //click on bank tab menu
        cy.xpath("(//div[contains(@class, 'gateway-card payment-gateway-card')])[1]").click(); //click on bank payment gateway card first index
        

        // the file is located in the `cypress/fixtures` folder
        const imagePath = 'images.jpeg';

        cy.xpath('//input[@type="file" and @accept="image/png, image/jpeg, image/jpg"]')
            .attachFile(imagePath);

        const randomName = `User-${Math.random().toString(36).substring(7)}`; // Random string
        const randomAccountNumber = Math.floor(Math.random() * 10000000000000).toString(); // 13-digit random number
        const randomBranchName = `Branch-${Math.random().toString(36).substring(7).toUpperCase()}`;
        // Generate a random amount between 100 and 5000
        const randomAmount = Math.floor(Math.random() * (5000 - 100 + 1)) + 100;

        // Fill in the form fields and verify the values 
        cy.get('#bankAccName').type(randomName).should('have.value', randomName);
        cy.get('#bankAccNumber').type(randomAccountNumber).should('have.value', randomAccountNumber);
        cy.get('#bankBranch').type(randomBranchName).should('have.value', randomBranchName);
        cy.get('#amount').type(randomAmount.toString()).should('have.value', randomAmount.toString());
        // Click the button and verify the expected outcome
        
        cy.get('.ant-form-item-control-input-content > .mb-2 > span').click({ multiple: true, force: true })
        .then(() => {
        // Optionally, add an assertion to verify the expected outcome after clicking
        cy.get('.mb-8 > .ant-typography').should('contain.text', 'Request Submitted Successfully!'); 
        });
        cy.wait(1000);
           

        


    }
        
}



