const { test, expect } = require('@playwright/test');
const { NoticiasPage } = require('../pages/NoticiasPage');

test.describe('Noticias', () => {
    test('muestra el listado de noticias', async ({ page }) => {
    const noticias = new NoticiasPage(page);
    await noticias.goto();
    await expect(noticias.title).toBeVisible();
    await expect(noticias.verMasLinks.first()).toBeVisible();
    await expect(noticias.verMasLinks).not.toHaveCount(0);
  });

  test('muestra la paginacion', async ({ page }) => {
    const noticias = new NoticiasPage(page);
    await noticias.goto();
    await expect(noticias.pagination).toBeVisible();
  });

  test('Ver más abre el detalle de una noticia', async ({ page }) => {
    const noticias = new NoticiasPage(page);
    await noticias.goto();
    await noticias.verMasLinks.first().click();
    await expect(page).toHaveURL(/noticias\/\d+/);
  });
});