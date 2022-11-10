import { Builder, By, until, Browser} from 'selenium-webdriver';
import { expect, assert} from 'chai';

const driver = new Builder().forBrowser('firefox').build();

class LoginPage {
    constructor(){
        global.driver = driver;
    }
    async launcher(){
       await driver.get('http://the-internet.herokuapp.com/secure')   
    
    }
    async inputUsername(user){
        let usernameAttributes = await driver.findElement(By.id(user))
            usernameAttributes.sendKeys(process.env.username);
            return this
    }
    async inputPassword(password){
        let passwordAttributes = await driver.findElement(By.name(password))   
            passwordAttributes.sendKeys(process.env.password);
            return this
    }
}
export default LoginPage