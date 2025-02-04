import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { MenuPage } from '../../pages/menu';
import { CamionsPage } from '../../pages/camion';
import { CreerCamionModalePage } from '../../pages/creerCamionModal';
import { SousTypeModalePage } from '../../pages/sousTypeModal';




test('Test de recherche de camion standard', async ({ page }) => {

  //Test de la création de camion standard, on crée un camion, puis on vérifie les données

  const Login =  new LoginPage(page);
  const Menu = new MenuPage(page);
  const Camion = new CamionsPage(page);
  await Login.gotoLoginPage();
  await Login.login('ragheb.postman','poxerbarubary12');
  await Menu.gotoVehiclePage();
  await Camion.writeSearch("AI192LP");
  await Camion.clickTruckTab();
  await expect(Camion.searchBar).toHaveValue("AI192LP")
  await expect(Camion.page.getByRole('cell', { name: 'AI192LP' })).toBeVisible();
  await Camion.clickBargeTab();
  await expect(Camion.searchBar).toHaveValue("AI192LP")

  });



test('Test : input recherche qui reste avec le changement de onglets ', async ({ page }) => {

  //On s'assure que la recherche rentée dans la barre reste visible après avoir changé d'onglet

  const Login =  new LoginPage(page);
  const Menu = new MenuPage(page);
  const Camion = new CamionsPage(page);
  await Login.gotoLoginPage();
  await Login.login('ragheb.postman','poxerbarubary12');
  await Menu.gotoVehiclePage();
  await Camion.writeSearch("AI192LP");
  await Camion.clickTruckTab();
  await expect(Camion.searchBar).toHaveValue("AI192LP")
  await expect(Camion.page.getByRole('cell', { name: 'AI192LP' })).toBeVisible();
  await Camion.clickBargeTab();
  await expect(Camion.searchBar).toHaveValue("AI192LP")

  });









