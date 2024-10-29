import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';
import { HomePage } from '../../pages/HomePage';
import { GestionProvenancesPage } from '../../pages/gestionProvenances';


test('Test création de provenance sur un site récèption', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationProvenance = new GestionProvenancesPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('Lyon - réception');
  await Menu.gotoProvPage();
  await CreationProvenance.ClickCreationProvenance();
  await CreationProvenance.InsertSite('réception');
  await CreationProvenance.InsertIdentifier('A125');
  await CreationProvenance.selectValuation('20');
  await CreationProvenance.selectAdress('23 Rue Lecourbe');
  await CreationProvenance.selectpostalCode('75015');
  await CreationProvenance.selectCity('Paris');
  await CreationProvenance.selectPlannedTour('44');
  await CreationProvenance.selectZone();
  await CreationProvenance.selectReplacement();
  await CreationProvenance.validate();
  
}

);


test('Test création de provenance sur un site récèption (selection adresse via maps)', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationProvenance = new GestionProvenancesPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('Lyon - réception');
  await Menu.gotoProvPage();
  await CreationProvenance.ClickCreationProvenance();
  await CreationProvenance.InsertSite('réception');
  await CreationProvenance.InsertIdentifier('A125');
  await CreationProvenance.selectValuation('20');
  await CreationProvenance.selectPlannedTour('44');
  await CreationProvenance.selectPosition('44.823390 ,-0.559438');
  await CreationProvenance.selectReplacement();
  await CreationProvenance.validate();
  //await CreationProvenance.checkVisibility('originAdded');
  //await expect(CreationProvenance.originAdded).toContainText("réception");
  
}

);

test('Test Ouverture/Fermeture/Archivage de provenance', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationProvenance = new GestionProvenancesPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('Lyon - réception');
  await Menu.gotoProvPage();
  await CreationProvenance.closeOrigin();
  await expect(CreationProvenance.originAdded).toContainText("réception");
  await CreationProvenance.archiveOrigin();
  await expect(CreationProvenance.originAdded).toContainText("réception");
  await CreationProvenance.OpenOrigin();

}

);


