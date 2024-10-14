exports.HomePage =  class HomePage  {
    constructor(page) {
      
      this.page = page; // Le constructeur prend la page Playwright
      this.dropDownList=page.getByLabel('treeselect trigger');
      this.plateformsChekbox=page.locator('div').filter({ hasText: /^altaroad$/ }).locator('div').nth(1);
      this.plateformsInput=page.getByRole('searchbox');
      this.crossButton=page.locator('#pn_id_9_list').getByRole('button').first();
      
      
    }
    async getCheckboxByLabel(plateform) {
      return this.page.getByLabel(plateform); // Utilise getByLabel pour trouver l'élément associé au label
    }
  
    // Méthode pour sélectionner une plateforme spécifique
    
    async selectPlatform(plateform) {
   

      await this.dropDownList.click();
      await this.plateformsChekbox.click();
      await this.plateformsInput.click();
      await this.plateformsInput.fill(plateform);
      const checkBoxPlatform = await this.getCheckboxByLabel(plateform);
      await checkBoxPlatform.click();
      await this.crossButton.click();
    
      
        }
  

  }
  
 
  
