import { Builder, By, until, Browser} from 'selenium-webdriver';
import { expect, assert} from 'chai';
import LoginPage from './Pages/LoginPage'
// const { describe } = require('mocha')
import {config} from 'dotenv';

describe('end to end testing', ()=>{
    const login = new LoginPage()

    it('should launch url',async () =>{
        try{
            await login.launcher()
        }
        catch (error) {
            console.log(error);}
    })
    it('should login user', async ()=>{
        try{
          await login.inputUsername('username') 
            await driver.findElement(By.id('username')).getAttribute('id').then(ids => {
            console.log('your attribute is',ids );   
            assert.deepEqual(ids,'username')  
        })
            await login.inputPassword('password')
            await driver.findElement(By.name('password')).getAttribute('name').then(name=>{
                console.log('yoursecond attribute is', name);
                assert.deepEqual(name, 'password')
            })
            
        }catch (error) {
        console.log(error);
      }
    })

})







