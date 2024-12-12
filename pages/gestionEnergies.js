exports.GestionEnergiesPage = class GestionEnergiesPage {

    constructor (page)
    {
        this.page = page
        this.creaEnergieButton = page.getByRole('link', { name: 'picto AJOUTER UNE ÉNERGIE' });
        this.NameInput = page.locator('#declarationForm').getByRole('textbox').first();
        this.InitialValueInput = page.getByRole('spinbutton').first();
        this.FinalValueInput = page.getByRole('spinbutton').nth(1);
        this.TypeDropdown = page.locator('#pn_id_57').getByLabel('dropdown trigger');
        //path indexé 
        //this.TypeInput = page.getByRole('option', { name: optionName });
        this.postalCodeInput = page.locator('#createOriginForm div').filter({ hasText: 'Adresse : Code postal : Ville : - modifier la localisation Distance estimée (Km' }).getByRole('textbox').nth(1);
        this.cityInput = page.locator('#createOriginForm div').filter({ hasText: 'Adresse : Code postal : Ville : - modifier la localisation Distance estimée (Km' }).getByRole('textbox').nth(2);

        this.plannedTourInput = page.locator('#createOriginForm div').filter({ hasText: 'Adresse : Code postal : Ville : - modifier la localisation Distance estimée (Km' }).getByRole('spinbutton');
        this.areaCheckbox= page.getByRole('radio').first();
        this.dropInput = page.locator('#pn_id_56').getByRole('combobox');
        this.dropDropDown = page.locator('#pn_id_22').getByLabel('dropdown trigger');
        this.replacementDropDown = page.locator('#pn_id_27').getByLabel('dropdown trigger');
        this.validateButton = page.locator('#editCreateTransporterModal').getByText('VALIDER');
        this.replacement = page.getByText('Lyon - réception', { exact: true });
        this .location = page.getByRole('img', { name: 'pinLocation' });
        this .position = page.getByLabel('Map', { exact: true });
        this.confirmationButton = page.getByText('CONFIRMER');
        this.closeButton = page.getByRole('row', { name: 'réception huyg D1 : Dépôt sur' }).getByRole('paragraph');
        //this.closeButton = page.getByText('Fermer la provenance').first();
        this.archiveButton = page.getByText('Archiver la provenance').first();
        this.closedListButton = page.getByText(/Fermés/);
        this.archivedListButton = page.getByText(/Archivés/);
        this.originAdded = page.locator('td').filter({ hasText: /^réception$/ });
        this.OpenOriginButton = page.getByRole('row', { name: 'réception huyg D1 : Dépôt sur' }).getByRole('paragraph');

        
    }

    

    async ClickCreationEnergie (){

        await this.creaEnergieButton.click();
           
    }  

    async ClickOnProvenance (){

      await this.ProvenanceButton.click();
         
  }
     
    async InsertName (Name){
        await this.NameInput.click();
        await this.NameInput.fill(Name);
      
     
    }
    async InsertIdentifier(Identifier){
      await this.IdentifierInput.click();
      await this.IdentifierInput.fill(Identifier);
   
  }

    async selectInitialValue(Value) {

      await this.InitialValueInput.click();
      await this.InitialValueInput.fill(Value); 

    }
    async selectFinalValue(Value) {

      await this.FinalValueInput.click();
      await this.FinalValueInput.fill(Value); 

    }
    
    async selectType(optionName) {

      await this.TypeDropdown.click();
      await this.TypeInput.fill(optionName);
     
    }


    async selectpostalCode(PC) {

      await this.postalCodeInput.click();
      await this.postalCodeInput.fill(PC);
      

    }
    async selectCity(CityName) {

      await this.cityInput.click();
      await this.cityInput.fill(CityName);
      

    }

    async selectPosition(position) {

      await this.location.click();
      

      // Décomposer la position en coordonnées x et y
      const [x, y] = position.split(',').map(Number);
      await this.position.waitFor({ state: 'visible', timeout: 30000 });
    
      // Cliquer sur la carte aux coordonnées spécifiées
      await this.page.getByLabel('Map', { exact: true }).dblclick({
        position: {
          x: x,
          y: y
        }
      });
      await this.confirmationButton.click();
    }

    async selectPlannedTour(plannedTour) {

      await this.plannedTourInput.click();
      await this.plannedTourInput.fill(plannedTour);
      

    }

    async selectZone() {

      await this.areaCheckbox.click();
      
    }

    async scrollToElement(element) {
      // Wait for the element to be attached to the DOM
     await element.waitFor({ state: 'attached', timeout: 8000 });
  
      // // Check if the element is visible
      // while (!(await element.isVisible())) {
      //     // Scroll down
      //     await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
      //     // Wait for a short duration before checking again
      //     await this.page.waitForTimeout(500);
      // }
  
      // console.log("L'élément est maintenant visible.");
  }


    async selectReplacement() {
      
      await this.replacementDropDown.click();
      await this.replacement.click();
  }

    async validate()
      {
        await this.validateButton.click();
      }

    async closeOrigin() {

        await this.closeButton.click();
        await this.closedListButton.click();
       

      } 

  async archiveOrigin() {

      await this.archiveButton.click();
      await this.archivedListButton.click();
       

    }  
    async OpenOrigin() {

      await this.OpenOriginButton.click();
     

    }  


    async checkVisibility(receptionElement) {

      const isVisible = await receptionElement.isVisible();

     if (isVisible) {
     console.log("L'élément est visible.");
     }  else {
      console.log("L'élément n'est pas visible.");
     }
   
  

    }  
    
  
      

 
}

    
