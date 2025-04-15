import { DepositPage } from "../../pages/depositPage";

const depositObj = new DepositPage();



describe('Deposit module testcases',() => {

    it("Deposit with mobile",() => {
        
        depositObj.deposit_with_mobile();
       
    });


    it("Deposit with bank",() => {
        
        depositObj.deposit_with_bank();
       
    });
   
    


})
  