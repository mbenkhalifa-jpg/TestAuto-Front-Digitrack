import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';
import { HomePage } from '../../pages/HomePage';
import { CreationPassagesPage } from '../../pages/CreationPassages';

test('Test création de passage sur un site reception', async ({ page }) => {
  // Initialisation des pages
  const homePage = new HomePage(page);
  const Login =  new LoginPage(page)
  const Menu = new MenuPage(page)
  const CreationPassage = new CreationPassagesPage(page)


  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*') // Effectuer la connexion
  await homePage.selectPlatform('y-réception');
  await Menu.gotoCreaPage();
  await CreationPassage.ClickCreationPassage();
  await CreationPassage.SelectPlate('AA123AB');
  await CreationPassage.selectOptions();

}
);


