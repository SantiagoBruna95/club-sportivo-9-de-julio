const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login de usuarios', () => {
  test('muestra el formulario de login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.enterButton).toBeVisible();
  });

  test('con datos invalidos no deja entrar', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('noexiste@test.com', 'claveincorrecta');
    await expect(page).toHaveURL(/login/);
  });
});