import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQ3MjdqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Google Google https://www.google.com.br ›' }).click();
  await page.getByLabel('Pesquisar', { exact: true }).click();
  await page.getByLabel('Pesquisar', { exact: true }).fill('teste de velocidade');
});