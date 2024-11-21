exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page; // Le constructeur prend la page Playwright
    this.dropDownList = page.getByLabel('treeselect trigger');
    this.plateformsCheckbox = page.locator('div').filter({ hasText: /^altaroad$/ }).locator('div').nth(1);
    this.plateformsInput = page.getByRole('searchbox');
    this.crossButton = page.locator('#pn_id_10_list').getByRole('button').first();
    
  }

  async getCheckboxByLabel(platform) {
    return this.page.getByLabel(platform);
  }

  // Méthode pour sélectionner une plateforme spécifique
  async selectPlatform(platform) {
    await this.dropDownList.click();
    await this.plateformsCheckbox.click();
    
    await this.plateformsInput.fill(platform); // Remplir directement sans click
    const checkBoxPlatform = await this.getCheckboxByLabel(platform);

    if (checkBoxPlatform) {
      await checkBoxPlatform.click();
    } else {
      console.error(`Checkbox not found for platform: ${platform}`);
    }

    await this.crossButton.click();
  }
}

  
 
  
