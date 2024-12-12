import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';
import { HomePage } from '../../pages/HomePage';
import { GestionEnergiesPage } from '../../pages/gestionEnergies';

test.describe('@smoke', () => {
test('Test création énergie ', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationEnergie = new GestionEnergiesPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('DE-BLAGIS-entrants');
  await Menu.gotoEnerPage();
   await CreationEnergie.ClickCreationEnergie();
  await CreationEnergie.InsertName('EnergieTest');
  //await CreationEnergie.selectType('23 Rue Lecourbe');
   //await CreationEnergie.InsertIdentifier('A125'); 
   await CreationEnergie.selectInitialValue('20');
   await CreationEnergie.selectFinalValue('');
  // await CreationEnergie.selectAdress('23 Rue Lecourbe');
  // await CreationEnergie.selectpostalCode('75015');
  // await CreationEnergie.selectCity('Paris');
  // await CreationEnergie.selectPlannedTour('44');
  // await CreationEnergie.selectZone();
  // await CreationEnergie.selectReplacement();
   await CreationEnergie.validate();
  
}

);
});

