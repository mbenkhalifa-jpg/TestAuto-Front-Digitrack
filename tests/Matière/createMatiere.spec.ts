import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { MenuPage } from '../../pages/menu';
import { MatierePage } from '../../pages/matiere';
import { creerMatiereModalPage } from '../../pages/creerMatiereModal';



test('Creation matiere', async ({ page }) => {

  //Test de la création de matière standard, on crée une matière et on vérifie que les données dans le tableau sont bien correctes.

  const Login =  new LoginPage(page);
  const Menu = new MenuPage(page);
  const Matiere = new MatierePage(page);
  const creerMatiereModal = new creerMatiereModalPage(page);
  await Login.gotoLoginPage();
  await Login.login('ragheb.postman','poxerbarubary12');
  await Menu.gotoMatPage();
  await Matiere.clickCreaButton();
  await creerMatiereModal.writeNom("MatiereTerre");
  await page.getByText('filière * ISDI').click();
  await page.getByText('Carrière de gypse', { exact: true }).click();
  await page.getByText('(béton )').click();
  await page.getByLabel('Option List').getByText('(bois )').click();
  await expect( page.getByText('Estimé 122(kgCO2e/T)')).toBeVisible();   // On vérifie que le facteur d'émission est bien modifié à la sélection du code déchet
  await creerMatiereModal.clickValidate();
  await page.waitForTimeout(8000);
  await expect(Matiere.page.getByRole('cell', { name: 'MATIERETERRE' })).toBeVisible();
  await expect(Matiere.page.getByRole('cell', { name: 'Carrière' })).toBeVisible();
});



test('Recherche matiere', async ({ page }) => {

  //Test de la recherche Matière
  //On crée préalablement 5 matières via des requêtes BACK
  //puis on teste la recherche
  //Ce qui est testé : la recherche par nom, par fillière, la persistence de la recherche quand on clique sur des filtres

  const Login =  new LoginPage(page);
  const Menu = new MenuPage(page);
  const Matiere = new MatierePage(page);
  await Login.gotoLoginPage();
  await Login.login('ragheb.postman','poxerbarubary12');
  await Menu.gotoMatPage();
  await Matiere.clickTousFiltre();
  await expect(page.getByText('Ouverts (6)')).toBeVisible();
  await Matiere.writeSearch("TEST");
  await Matiere.page.keyboard.press('Enter');
  await expect(page.getByText('Ouverts (3)')).toBeVisible();
  await Matiere.writeSearch("");
  await Matiere.page.keyboard.press('Enter');
  await Matiere.writeSearch("ISDI");
  await Matiere.page.keyboard.press('Enter');
  await expect(page.getByText('Ouverts (3)')).toBeVisible();
  await expect(Matiere.page.getByText('résultats')).toHaveText('2 résultats');
  await Matiere.clickRecepFiltre();
  await expect(page.getByText('Ouverts (1)')).toBeVisible();
  await Matiere.clickBothFiltre();
  await expect(page.getByText('Ouverts (0)')).toBeVisible();
  await Matiere.clickEvacFiltre();
  await expect(page.getByText('Ouverts (1)')).toBeVisible();
  await expect(Matiere.page.getByText('résultats')).toHaveText('1 résultats');
  await Matiere.writeSearch("");
  await Matiere.writeSearch("ISDD");
  await Matiere.page.keyboard.press('Enter');
  await expect(page.getByText('Ouverts (1)')).toBeVisible();
  });


  test('Verification progression matiere', async ({ page }) => {

    //Test de la progression matière
    //On crée préalablement tous les objets nécéssaires à la création d'un passage
    //Ensuite on crée un passage avec la matière créée précédemment
    //Finalement, on vérifie si la progression de la matière a bien bougé après validation du passage

    
  const Login =  new LoginPage(page);
  const Menu = new MenuPage(page);
  const Matiere = new MatierePage(page);
  await Login.gotoLoginPage();
  await Login.login('ragheb.postman','poxerbarubary12');
  await Menu.gotoMatPage();
  await expect(page.getByRole('cell', { name: '22 /' })).toBeVisible(); // On vérifie que la progression est bien égale au chargement du passage , dans ce cas 22t
  await expect(page.getByRole('cell', { name: '1', exact: true })).toBeVisible(); // On vérifie que le nombre de tours a bien été incrémenté


  });

  
  