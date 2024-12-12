import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';
import { HomePage } from '../../pages/HomePage';
import { ModificationDestinationsPage } from '../../pages/modificationDestinations';

test.describe('@smoke', () => {
test('Test modification de destination ', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const ModificationDestination = new ModificationDestinationsPage(page)
  
  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('Lyon - évacuation');
  await Menu.gotoDestPage();
  await ModificationDestination.ClickOnDestination();
  await ModificationDestination.InsertSite('réception');
  await ModificationDestination.InsertIdentifier('A125');
  await ModificationDestination.selectValuation('20');
  await ModificationDestination.selectAdress('23 Rue Lecourbe');
  //await ModificationDestination.selectpostalCode('75015');
  //await ModificationDestination.selectCity('Paris');
  //await ModificationDestination.selectPlannedTour('44');
  //await ModificationDestination.selectZone();
  //await ModificationDestination.selectReplacement();
  //await ModificationDestination.CreateCompany();
  await ModificationDestination.validate();

  
}

);

});
