const { AdminDashboardPage } = require('../pages/AdminDashboardPage');
const { test, expect } = require('@playwright/test');
const { AdminLoginPage } = require('../pages/AdminLoginPage');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@test.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

test.describe('Login de administrador', () => {
  test('muestra el formulario de login de admin', async ({ page }) => {
    const adminLogin = new AdminLoginPage(page);
    await adminLogin.goto();
    await expect(adminLogin.emailInput).toBeVisible();
    await expect(adminLogin.passwordInput).toBeVisible();
  });

  test('con datos invalidos no deja entrar', async ({ page }) => {
    const adminLogin = new AdminLoginPage(page);
    await adminLogin.goto();
    await adminLogin.login('noexiste@test.com', 'claveincorrecta');
    await expect(page).toHaveURL(/admin\/login/);
  });

    test('con datos validos entra al panel', async ({ page }) => {
    test.skip(!ADMIN_PASSWORD, 'Falta la variable ADMIN_PASSWORD');
    const adminLogin = new AdminLoginPage(page);
    const dashboard = new AdminDashboardPage(page);
    await adminLogin.goto();
    await adminLogin.login(ADMIN_EMAIL, ADMIN_PASSWORD);
    await expect(dashboard.title).toBeVisible();
    await expect(dashboard.noticiasLink).toBeVisible();
    await expect(dashboard.logoutButton).toBeVisible();
  });
});