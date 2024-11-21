import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { MenuPage } from '../../pages/menu';
import { TransporteurPage } from '../../pages/transporteur';
import { CreerTransporteurModalePage } from '../../pages/creerTransporteurModal';
import { CreerEntrepriseModalePage } from '../../pages/creerentrepriseModal';




test('Test standard', async ({ page }) => {


  //Test de la création de transporteur standard, on crée un transporteur, puis on vérifie les données

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

  test('Test avec création entreprise', async ({ page }) => {

    // Test de la création d'un transporteur + la création d'une entreprise à partir de la même modale
    // On vérifie que l'entreprise nouvellement créée est automatiquement ajoutée à la modale

    const Login =  new LoginPage(page)
    const Menu = new MenuPage(page)
    const Transporteur = new TransporteurPage(page)
    const creerTransporteurModal = new CreerTransporteurModalePage(page);
    const creerEntrepriseModal = new CreerEntrepriseModalePage(page);
    await Login.gotoLoginPage();
    await Login.login('ragheb.postman','poxerbarubary12')
    await Menu.gotoTransPage();
    await Transporteur.clickCreaButton();
    await creerTransporteurModal.writeNom("test1");
    await creerTransporteurModal.writeRecepisse("testR");
    await creerTransporteurModal.writeDR("23");
    await creerTransporteurModal.clickCreateEntreprise();
    await creerEntrepriseModal.writeNom("HERVAL");
    await creerEntrepriseModal.clickListElement();
    await creerEntrepriseModal.clickValidate();
    await expect(page.locator('app-form-company')).toContainText('Raison sociale : HERVAL');
    await creerTransporteurModal.clickValidate();
    await Transporteur.clickCell("test1");
    await expect(creerTransporteurModal.nomZone).toHaveValue('test1');
    await expect(creerTransporteurModal.recepisseZone).toHaveValue('testR');
    await expect(creerTransporteurModal.drZone).toHaveValue("23");
  
    });
  
  
