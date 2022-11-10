const { Builder, By, until, Browser} = require('selenium-webdriver')
const { expect, assert} = require('chai')
// const { describe } = require('mocha')
require('dotenv').config()

describe('end to end testing', ()=>{
    const driver = new Builder().forBrowser('firefox').build();

    it('should launch url', () =>{
        driver.get('http://the-internet.herokuapp.com/secure')
    })
    it('should login user', async ()=>{
        try{
            let usernameAttributes = await driver.findElement(By.id('username'))
            usernameAttributes.sendKeys(process.env.username);
            await usernameAttributes.getAttribute('id').then(ids => {
            console.log('your attribute is',ids );   
            assert.deepEqual(ids,'username')  
        })
            let passwordAttributes = await driver.findElement(By.name('password'))   
            passwordAttributes.sendKeys(process.env.password);
            await passwordAttributes.getAttribute('name').then(name=>{
                console.log('yoursecond attribute is', name);
                assert.deepEqual(name, 'password')
            })
            
        }catch (error) {
        console.log(error);
      }
    })

})







