class NoticiasPage {
  constructor(page) {
    this.page = page;
    this.title = page.getByRole('heading', { name: 'Noticias', exact: true });
    this.verMasLinks = page.getByRole('link', { name: /ver más/i });
    this.pagination = page.getByText(/Página \d+ de \d+/);
    this.nextButton = page.getByRole('button', { name: /siguiente/i });
    this.prevButton = page.getByRole('button', { name: /anterior/i });
  }

  async goto() {
    await this.page.goto('/noticias');
  }
}

module.exports = { NoticiasPage };