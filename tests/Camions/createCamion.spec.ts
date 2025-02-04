import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { MenuPage } from '../../pages/menu';
import { CamionsPage } from '../../pages/camion';
import { CreerCamionModalePage } from '../../pages/creerCamionModal';



test('Creation camion', async ({ page }) => {

  //Test de la création de camion standard, on crée un camion, puis on vérifie les données dans le tableau

  const Login =  new LoginPage(page);
  const Menu = new MenuPage(page);
  const Camion = new CamionsPage(page);
  const creerCamionModale = new CreerCamionModalePage(page);
  await Login.gotoLoginPage();
  await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*');
  await Menu.gotoTruckPage();
  await Camion.clickCreaButton();
  await page.getByPlaceholder('AA123AA').fill("AI192LP");
  await creerCamionModale.transSelect("transporteur_test");
  await creerCamionModale.writeMasseVide("20");
  await creerCamionModale.writeChargement("15");
  await creerCamionModale.writeEssieux("5");
  await creerCamionModale.clickValidate();
  await Camion.clickTruckTab();
  await expect(Camion.page.getByRole('cell', { name: 'AI192LP' })).toBeVisible();
});

test('Recherche camions', async ({ page }) => {

    //Test de la recherche camion 
    //On crée préalablement 5 camions via des requêtes BACK
    //puis on teste la recherche
    //Ce qui est testé : le camion recherché, le summary et le nombre de résultats

    const Login =  new LoginPage(page);
    const Menu = new MenuPage(page);
    const Camion = new CamionsPage(page);
    await Login.gotoLoginPage();
    await Login.login('ragheb.postman','poxerbarubary12');
    await Menu.gotoTruckPage();
    await Camion.page.getByText('Tous les camions (5)').click();
    await page.waitForTimeout(3000);
    await Camion.writeSearch("AI192");
    await Camion.page.keyboard.press('Enter');
    await expect(Camion.page.getByRole('cell', { name: 'AI192LP' })).toBeVisible();
    await expect(Camion.page.getByRole('cell', { name: 'AI192MK' })).toBeVisible();
    await expect(Camion.page.getByText('Tous les camions (2)')).toBeVisible();
    await expect(Camion.page.getByText('résultats')).toHaveText('2 résultats');
  
    });



    test('Modification camion', async ({ page }) => {


      //Test de la modification camion
      //On crée préalablement un 2ème transporteur : transporteur 2 via une requête BACK
      //On modifie le transporteur, la plaque, la masse, et le nombre d'essieux de AI192LP
      //Puis on vérifie que les modifications aient bien été prises en compte dans le tableau

      const Login =  new LoginPage(page);
      const Menu = new MenuPage(page);
      const Camion = new CamionsPage(page);
      const creerCamionModale = new CreerCamionModalePage(page);
      await Login.gotoLoginPage();
      await Login.login('ragheb.postman','poxerbarubary12');
      await Menu.gotoTruckPage();
      await Camion.page.getByText('Tous les camions (5)').click();
      await Camion.page.getByText('AI192LP').click();
      await page.getByText('transporteur_test').click();
      await page.getByText('transporteur2').click();
      await creerCamionModale.writeMasseVide("25");
      await creerCamionModale.writeEssieux("4");
      await creerCamionModale.writePlaque("AA123AA");
      await creerCamionModale.clickValidate();
      await expect(Camion.page.getByRole('cell', { name: 'AA123AA' })).toBeVisible();
      await expect(Camion.page.getByRole('cell', { name: '25t' })).toBeVisible();
      await expect(Camion.page.getByRole('cell', { name: '4' })).toBeVisible();
    
      });