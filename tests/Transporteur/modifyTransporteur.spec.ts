import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { MenuPage } from '../../pages/menu';
import { TransporteurPage } from '../../pages/transporteur';
import { CreerTransporteurModalePage } from '../../pages/creerTransporteurModal';
import { CreerEntrepriseModalePage } from '../../pages/creerentrepriseModal';


test('Test standard', async ({ page }) => {

    
    const Login =  new LoginPage(page)
    const Menu = new MenuPage(page)
    const Transporteur = new TransporteurPage(page)
    const creerTransporteurModal = new CreerTransporteurModalePage(page);
    await Login.gotoLoginPage();
    await Login.login('ragheb.postman','poxerbarubary12')
    await Menu.gotoTransPage();
    await Transporteur.clickCreaButton();
    await creerTransporteurModal.writeNom("test1");
    await creerTransporteurModal.writeRecepisse("testR");
    await creerTransporteurModal.writeDR("23");
    await creerTransporteurModal.entrepriseSelect("Liksi");
    await creerTransporteurModal.clickValidate();
    await Transporteur.clickCell("test1");
    await expect(creerTransporteurModal.nomZone).toHaveValue('test1');
    await expect(creerTransporteurModal.recepisseZone).toHaveValue('testR');
    await expect(creerTransporteurModal.drZone).toHaveValue("23");
  
    });