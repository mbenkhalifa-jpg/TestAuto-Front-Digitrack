import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { MenuPage } from '../../pages/menu';
import { CamionsPage } from '../../pages/camion';
import { CreerCamionModalePage } from '../../pages/creerCamionModal';
import { SousTypeModalePage } from '../../pages/sousTypeModal';
//const newman = require('newman')





  test('Test de création de sous-type', async ({ page }) => {

    //Test de la création de camion standard, on crée un camion, puis on vérifie les données
  
    const Login =  new LoginPage(page);
    const Menu = new MenuPage(page);
    const Camion = new CamionsPage(page);
    const creerCamionModale = new CreerCamionModalePage(page);
    const SousTypeModale = new SousTypeModalePage(page);
    await Login.gotoLoginPage();
    await Login.login('marwa.benkhalifa-ext@altaroad.com','Marmarou1234*');
    await Menu.gotoVehiclePage();
    await Camion.clickCreaVehicleButton();
    await creerCamionModale.clickCreateSousButton();
    await SousTypeModale.writeMasseVide("20");
    await SousTypeModale.writeName("sous-type3")
    await SousTypeModale.writeChargement("12");
    await SousTypeModale.writeVolume("23");
    await SousTypeModale.writeFacteur("33");
    await SousTypeModale.clickValidate();
    await creerCamionModale.clickClose();
    await Camion.clickCreaVehicleButton();

    });
  

test('Test de création de camion standard + sous-type', async ({ page }) => {

    //Test de la création de camion standard, on crée un camion, puis on vérifie les données
  
    const Login =  new LoginPage(page);
    const Menu = new MenuPage(page);
    const Camion = new CamionsPage(page);
    const creerCamionModale = new CreerCamionModalePage(page);
    const SousTypeModale = new SousTypeModalePage(page);
    await Login.gotoLoginPage();
    await Login.login('ragheb.postman','poxerbarubary12');
    await Menu.gotoTruckPage();
    await Camion.clickCreaButton();
    await page.getByPlaceholder('AA123AA').click();
    await creerCamionModale.writePlaque("AP192LP");
    await creerCamionModale.transSelect("transporteur_test");
    await creerCamionModale.writeEssieux("5");
    await creerCamionModale.writeBadge("18");
    await creerCamionModale.clickCreateSousButton();
    await SousTypeModale.writeMasseVide("20");
    await SousTypeModale.writeName("sous-type1")
    await SousTypeModale.writeChargement("12");
    await SousTypeModale.writeVolume("23");
    await SousTypeModale.writeFacteur("33");
    await SousTypeModale.clickValidate();
    await expect(creerCamionModale.masseVideText).toHaveValue("20");
    await expect(creerCamionModale.chargementText).toHaveValue("12");
    await creerCamionModale.clickValidate();
    await Camion.clickTruckTab();
    await expect(Camion.page.getByRole('cell', { name: 'AP192LP' })).toBeVisible();
    });

  

    test('Test de création de barge standard', async ({ page }) => {

      //Test de la création de véhicule standard, on crée une barge, puis on vérifie les données
    
      const Login =  new LoginPage(page);
      const Menu = new MenuPage(page);
      const Camion = new CamionsPage(page);
      const creerCamionModale = new CreerCamionModalePage(page);
      const SousTypeModale = new SousTypeModalePage(page);
      await Login.gotoLoginPage();
      await Login.login('ragheb.postman','poxerbarubary12');
      await Menu.gotoVehiclePage();
      await Camion.clickCreaVehicleButton();
      await creerCamionModale.writePlaque("AP187LP");
      await creerCamionModale.transSelect("transporteur_test");
      await creerCamionModale.vehicleTypeSelect("Barge")
      await creerCamionModale.clickValidate();
      await Camion.clickBargeTab();
      await expect(Camion.page.getByRole('cell', { name: 'AP187LP' })).toBeVisible();
      });
  



    test('Test de création de wagon standard', async ({ page }) => {
      //Test de la création de véhicule standard, on crée une barge, puis on vérifie les données     
      const Login =  new LoginPage(page);
      const Menu = new MenuPage(page);
      const Camion = new CamionsPage(page);
      const creerCamionModale = new CreerCamionModalePage(page);
      const SousTypeModale = new SousTypeModalePage(page);
      await Login.gotoLoginPage();
      await Login.login('ragheb.postman','poxerbarubary12');
      await Menu.gotoVehiclePage();
      await Camion.clickCreaVehicleButton();
      await creerCamionModale.writePlaque("AP182LP");
      await creerCamionModale.transSelect("transporteur_test");
      await creerCamionModale.vehicleTypeSelect("Wagon")
      await creerCamionModale.clickValidate();
      await Camion.clickWagonTab();
      await expect(Camion.page.getByRole('cell', { name: 'AP182LP' })).toBeVisible();
      });


      test('Test de création de bande transporteuse standard', async ({ page }) => {
        //Test de la création de véhicule standard, on crée une barge, puis on vérifie les données     
        const Login =  new LoginPage(page);
        const Menu = new MenuPage(page);
        const Camion = new CamionsPage(page);
        const creerCamionModale = new CreerCamionModalePage(page);
        const SousTypeModale = new SousTypeModalePage(page);
        await Login.gotoLoginPage();
        await Login.login('ragheb.postman','poxerbarubary12');
        await Menu.gotoVehiclePage();
        await Camion.clickCreaVehicleButton();
        await creerCamionModale.writePlaque("AP180LP");
        await creerCamionModale.transSelect("transporteur_test");
        await creerCamionModale.vehicleTypeSelect("Bande transporteuse")
        await creerCamionModale.clickValidate();
        await Camion.clickBandeTab();
        await expect(Camion.page.getByRole('cell', { name: 'AP180LP' })).toBeVisible();
        });
  
        