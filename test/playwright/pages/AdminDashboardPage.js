class AdminDashboardPage {
  constructor(page) {
    this.page = page;
    this.title = page.getByRole('heading', { name: /dashboard/i });
    this.noticiasLink = page.getByRole('link', { name: /noticias/i });
    this.sociosLink = page.getByRole('link', { name: /socios/i });
    this.logoutButton = page.getByText(/cerrar sesión/i);
  }
}

module.exports = { AdminDashboardPage };