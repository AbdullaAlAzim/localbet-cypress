import testData from "../../fixtures/testData.json";
import { Withdraw_Mobile } from "../../pages/Withdraw_Mobile";
import { profilePage } from "../../pages/profilePage";

//Profile variable
const profileobj = new profilePage
//Profile variable
const mobileObj = new Withdraw_Mobile();

describe('Withdraw With Mobile',() => {

    it("Withdraw with valid Mobile Number",() => {
        cy.login(testData.login.username, testData.login.password);  
        profileobj.ProfileMenu();
        profileobj.profileNavigation();
        mobileObj.Withdraw_Mobile_with_Valid_Data();

    });

})
  