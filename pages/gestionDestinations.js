exports.GestionDestinationsPage = class GestionDestinationsPage {

    constructor (page)
    {
        this.page = page
        this.creaDestinationButton = page.getByRole('link', { name: 'picto CRÉER UNE DESTINATION' });
        this.siteInput = page.locator('#createDumpingForm').getByRole('textbox').first();
        this.IdentifierInput = page.locator('#createDumpingForm').getByRole('textbox').nth(1);
        this.ValuationInput = page.locator('#createDumpingForm div').filter({ hasText: 'Site * : Identifiant (CAP/DAP ou autre) * : Valorisation (%) : filière * : ISDI' }).getByRole('spinbutton');
        this.adressInput = page.locator('#wording');
        this.postalCodeInput = page.locator('#createDumpingForm').getByRole('textbox').nth(3);
        this.cityInput = page.locator('#createDumpingForm').getByRole('textbox').nth(4);
        this.entrepriseDropdown = page.locator('#pn_id_114').getByLabel('dropdown trigger');
        this.satm = page.getByText('SATM');
        this.validateButton = page.locator('#editCreateTransporterModal').getByText('VALIDER');
        
        this.validateButton = page.locator('#editCreateTransporterModal').getByText('VALIDER');
        this .location = page.getByRole('img', { name: 'pinLocation' });
        this .position = page.getByLabel('Map', { exact: true });
        this.confirmationButton = page.getByText('CONFIRMER');
        this.closeButton = page.getByRole('row', { name: 'EVACUATION 255 D1 : Dépôt sur' }).getByRole('paragraph');
        //this.closeButton = page.getByText('Fermer la provenance').first();
        this.archiveButton = page.getByText('Archiver la destination');
        this.closedListButton = page.getByText(/Fermés/);
        this.archivedListButton = page.getByText(/Archivés/);
        this.originAdded = page.getByText('EVACUATION', { exact: true });
        this.OpenOriginButton = page.getByText('Ouvrir la destination');


        
    }

    async ClickCreationDestination (){

        await this.creaDestinationButton.click();
           
    }  
     
    async InsertSite (Site){
        await this.siteInput.click();
        await this.siteInput.fill(Site);
      
     
    }
    async InsertIdentifier(Identifier){
      await this.IdentifierInput.click();
      await this.IdentifierInput.fill(Identifier);
   
  }

    async selectValuation(Valuation) {

      await this.ValuationInput.click();
      await this.ValuationInput.fill(Valuation);
      

    }

    async selectAdress(Adress) {

      await this.adressInput.click();
      await this.adressInput.fill(Adress);
      
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

  


    async selectEntreprise() {

      await this.entrepriseDropdown.click();
      await this.satm.click();
      
    
    }

    async validate()
      {
          this.validateButton.click();
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

 
}

    
