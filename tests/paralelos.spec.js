// @ts-check
const { test, expect } = require('@playwright/test');
test('Login com sucesso @login', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Login' }).click();
    //await page.screenshot({ path: 'screenshot/screenshot.png' });
    //esse acima cria a pasta e guarda o print nela, se usado várias vezes não vai criar apenas guardar.
    await page.locator('#user').click();
    await page.locator('#user').fill('teste@gmail.com');
    await page.locator('#password').click();
    //await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
    //esse tira print do elemento especifico e guarda.
    await page.locator('#password').fill('123456');
    //await page.screenshot({ path: 'screenshot.png' });
    //acima está o print de tela.
    await page.getByRole('button', { name: 'login' }).click();
  });
  
  test('Login com sucesso2 text scrool', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');

    const texto = await page.waitForSelector('text=NEWSLETTER')
    await texto.scrollIntoViewIfNeeded()
    
    await page.getByRole('link', { name: ' Login' }).click();
    await page.locator('#user').click();
    await page.locator('#user').fill('teste@gmail.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
  });
  
  test('Login com sucesso3 scrool', async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');

    const button = await page.getByRole('button', { name: 'Send Mail'})
    await button.scrollIntoViewIfNeeded()
    await button.click()
    
    await page.getByRole('link', { name: ' Login' }).click();
    await page.locator('#user').click();
    await page.locator('#user').fill('teste@gmail.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
  });
  //npx playwright test --ui executar com esse comando