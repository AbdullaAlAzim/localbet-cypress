import  testData from "../../fixtures/testData.json"
import { TransferPage} from "../../pages/TransferPage";
import { profilePage } from "../../pages/profilePage";


const transferObj = new TransferPage
//Transfer variable
const profileobj = new profilePage

describe('Transfer module testcases',() => {

    it("Transfer With Minimum Amount",() => {
        
        cy.login(testData.login.username, testData.login.password);
        //cy.oneClickRegistration();
        profileobj.ProfileMenu();
        profileobj.profileNavigation();
        transferObj.Transfer_with_amount();

    });

})