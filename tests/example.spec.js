// @ts-check
const { test, expect } = require('@playwright/test');
test.use({
  viewport: { width: 1600, height: 1200 },
});
// isso acima define o tamanho da tela a resolução
test('Login com sucesso', async ({ page }) => {
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
