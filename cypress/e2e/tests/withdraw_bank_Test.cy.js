import testData from "../../fixtures/testData.json";
import { Withdraw_Bank } from "../../pages/Withdraw_Bank";
import { profilePage } from "../../pages/profilePage";


//Profile variable
const profileobj = new profilePage
//Profile variable
const bankObj = new Withdraw_Bank();

describe('Withdraw With Bank',() => {

    it("Withdraw with valid Bank Number",() => {
        cy.login(testData.login.username, testData.login.password);  
        profileobj.ProfileMenu();
        profileobj.profileNavigation();
        bankObj.Withdraw_Bank_with_Valid_Data();

    });

})
  