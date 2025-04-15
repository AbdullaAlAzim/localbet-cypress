import testData from "../../fixtures/loginData.json";
import { LoginPage } from "../../pages/loginPage";


const loginObj  = new LoginPage();

describe('Login and forgot password Testcases', () => {



  it('should read login credentials from the text file and perform login', () => {

      cy.oneClick_data_with_login();
    
});



  it("login with valid email",() => {
      
      cy.login('company@softic.ai', '123456');
      // logout 
      cy.xpath("//div[@class='flex items-center gap-3 bg-[#F4F4F4] rounded px-2 py-1 relative cursor-pointer']").click();
      cy.get('.p-4 > :nth-child(2) > .w-full > .ant-typography').click()
  });


  
  it("login with phone number",() => {
    loginObj.login_with_phone();
    
    
});



it("Login with invalid data", () => {

 loginObj.openURL()
 loginObj.login_with_invalid_data()

}) 
   


it("Forgot password with email", () => {

  loginObj.openURL()
  loginObj.forgot_password_with_email()
 
 }) 


 it.skip("Forgot password with accountID", () => {

  loginObj.openURL()
  loginObj. forgot_password_with_accountId()
 
 }) 




 it("Forgot password with phone", () => {

  loginObj.openURL()
  loginObj.forgot_password_with_phone()
 
 }) 








  
  });