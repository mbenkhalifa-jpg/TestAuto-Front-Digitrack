import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';
import { HomePage } from '../../pages/HomePage';
import { ModificationProvenancesPage } from '../../pages/modificationProvenances';

test.describe('@smoke', () => {
test('Test modification de provenance sur un site récèption', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const ModificationProvenance = new ModificationProvenancesPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('Lyon - réception');
  await Menu.gotoProvPage();
  await ModificationProvenance.ClickOnProvenance();
  await ModificationProvenance.InsertSite('réception');
  await ModificationProvenance.InsertIdentifier('A125');
  await ModificationProvenance.selectValuation('20');
  await ModificationProvenance.selectAdress('23 Rue Lecourbe');
  await ModificationProvenance.selectpostalCode('75015');
  await ModificationProvenance.selectCity('Paris');
  await ModificationProvenance.selectPlannedTour('44');
  await ModificationProvenance.selectZone();
  //await ModificationProvenance.selectReplacement();
  //await ModificationProvenance.CreateCompany();
  await ModificationProvenance.validate();

  
}

);


test('Test modification de provenance sur un site récèption (selection adresse via maps)', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const ModificationProvenance = new ModificationProvenancesPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('Lyon - réception');
  await Menu.gotoProvPage();
  await ModificationProvenance.ClickOnProvenance();
  await ModificationProvenance.InsertSite('réception');
  await ModificationProvenance.InsertIdentifier('A125');
  await ModificationProvenance.selectValuation('20');
  await ModificationProvenance.selectPlannedTour('44');
  await ModificationProvenance.selectPosition('44.823390 ,-0.559438');
  await ModificationProvenance.selectReplacement();
  await ModificationProvenance.validate();
  //await ModificationProvenance.checkVisibility('originAdded');
  //await expect(ModificationProvenance.originAdded).toContainText("réception");
  
}

);

test('Test Ouverture/Fermeture/Archivage de provenance', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const ModificationProvenance = new ModificationProvenancesPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('Lyon - réception');
  await Menu.gotoProvPage();
  await ModificationProvenance.closeOrigin();
  await expect(ModificationProvenance.originAdded).toContainText("réception");
  await ModificationProvenance.archiveOrigin();
  await expect(ModificationProvenance.originAdded).toContainText("réception");
  await ModificationProvenance.OpenOrigin();

}

);

});
