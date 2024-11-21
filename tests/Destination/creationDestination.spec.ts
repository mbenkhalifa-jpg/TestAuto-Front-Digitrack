import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';
import { HomePage } from '../../pages/HomePage';
import { GestionDestinationsPage } from '../../pages/gestionDestinations';


test('Test création de destination sur un site évacuation', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationDestination = new GestionDestinationsPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('Lyon - évacuation');
  await Menu.gotoDestPage();
  await CreationDestination.ClickCreationDestination();
  await CreationDestination.InsertSite('evacuation');
  await CreationDestination.InsertIdentifier('A125');
  await CreationDestination.selectValuation('20');
  await CreationDestination.selectAdress('23 Rue Lecourbe');
  await CreationDestination.selectpostalCode('75015');
  await CreationDestination.selectCity('Paris');
  await CreationDestination.selectEntreprise();
  await CreationDestination.validate();
  

}
);

test('Test création de destination sur un site évacuation (selection adresse via maps )', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationDestination = new GestionDestinationsPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') 
  await homePage.selectPlatform('Lyon - évacuation');
  await Menu.gotoDestPage();
  await CreationDestination.ClickCreationDestination();
  await CreationDestination.InsertSite('evacuation');
  await CreationDestination.InsertIdentifier('A125');
  await CreationDestination.selectValuation('20');
  await CreationDestination.selectPosition('44.823390 ,-0.559438');
  await CreationDestination.selectEntreprise();
  await CreationDestination.validate();
  

}
);

test('Test Ouverture/Fermeture/Archivage de destination', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationDestination = new GestionDestinationsPage(page)
  

  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') 
  await homePage.selectPlatform('Lyon - évacuation')
  await Menu.gotoDestPage();
  await CreationDestination.closeOrigin();
  await expect(CreationDestination.originAdded).toContainText("EVACUATION");
  await CreationDestination.archiveOrigin();
  await expect(CreationDestination.originAdded).toContainText("EVACUATION");
  await CreationDestination.OpenOrigin();

}

);
