import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { MenuPage } from '../../pages/menu';
import { TransporteurPage } from '../../pages/transporteur';
import { CreerTransporteurModalePage } from '../../pages/creerTransporteurModal';
import { CreerEntrepriseModalePage } from '../../pages/creerentrepriseModal';
import { EntreprisePage } from '../../pages/entreprise';

test('Modif entreprise et check transporteur', async ({ page }) => {

    // Test de la modification d'entreprise
    // On modifie une entreprise et on check si les changement sont appliqués dans le front avec un transporteur contenant 
    // cette entreprise

    const Login =  new LoginPage(page)
    const Menu = new MenuPage(page)
    const Transporteur = new TransporteurPage(page)
    const creerTransporteurModal = new CreerTransporteurModalePage(page);
    const creerEntrepriseModal = new CreerEntrepriseModalePage(page);
    const Entreprise = new EntreprisePage(page);
    await Login.gotoLoginPage();
    await Login.login('ragheb.postman','poxerbarubary12')
    await Menu.gotoEntPage();
    await Entreprise.clickCell();
    await creerEntrepriseModal.writeSiret("11111111");
    await creerEntrepriseModal.writeContact("Ragheb");
    await creerEntrepriseModal.writeTel("0685096921");
    await creerEntrepriseModal.writeEmail("zr@gmail.com");
    await creerEntrepriseModal.clickValidate();
    await Menu.transButton.click();
    await expect(Transporteur.page.getByRole('cell', { name: '11111111' })).toBeVisible();
    await expect(Transporteur.page.getByRole('cell', { name: 'Ragheb' })).toBeVisible();
    await expect(Transporteur.page.getByRole('cell', { name: '685096921' })).toBeVisible();
    await expect(Transporteur.page.getByRole('cell', { name: 'zr@gmail.com' })).toBeVisible();

    

  
    });
  
  
