class AdminLoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.enterButton = page.getByRole('button', { name: /entrar|ingresar/i });
  }

  async goto() {
    await this.page.goto('/admin/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.enterButton.click();
  }
}

module.exports = { AdminLoginPage };