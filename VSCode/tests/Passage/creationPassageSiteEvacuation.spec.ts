import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';
import { HomePage } from '../../pages/HomePage';
import { CreationPassagesPage } from '../../pages/CreationPassages';
import {gestionPassagesPage } from '../../pages/gestionPassages';

test('Test création de passage sur un site evacuation', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationPassage = new CreationPassagesPage(page)
  const GestionPassages = new gestionPassagesPage(page)
  


  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('y-evacuation');
  await Menu.gotoCreaPage();
  await CreationPassage.ClickCreationPassage();
  await CreationPassage.SelectPlate('AA123AB');
  await CreationPassage.selectPassageType();
  await CreationPassage.selectMaterial();
  await CreationPassage.selectConstructionSite();
  await CreationPassage.selectMass('22');
  await CreationPassage.validateCreation;
  await Menu.gotoGestPage();
  await expect(GestionPassages.passagePlate).toHaveValue("AA123AB");
  await expect(GestionPassages.passageCreationDate).toHaveValue("15/10/2024");

}
);


