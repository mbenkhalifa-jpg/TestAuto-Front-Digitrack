exports.CreerCamionModalePage =  class CreerCamionModalePage {

    constructor (page)
    {

        this.page = page
        this.plaqueZone = page.locator('#editValidateTruckForm').getByRole('textbox');
        this.sousDrop = page.getByText('Sous-type de camion * : Selectionner + créer un sous-type')
        this.sousCreate = page.locator('a').filter({ hasText: '+ créer un sous-type' })
        this.vehicleTypeDrop = page.locator('#newTruckForm div').filter({ hasText: 'Type de véhicule * :' }).nth(2)
        this.transDrop = page.getByText('Entrer le transporteur* : Selectionner + créer un transporteur')
        this.typeDrop = page.getByLabel('ÉVACUATION', { exact: true })
        this.createTrans = page.locator('a').filter({ hasText: '+ créer un transporteur' })
        this.masseVideText = page.getByRole('spinbutton').first()
        this.chargementText = page.getByRole('spinbutton').nth(1)
        this.essieuxText = page.getByRole('spinbutton').nth(2)
        this.badgeText = page.getByRole('spinbutton').nth(3)
        this.validateButton = page.locator('app-button').filter({ hasText: 'VALIDER' }).locator('div')
        this.closeButton = page.locator('#createMailleModal').getByText('FERMER')

       
    }



  
    async writePlaque (name){
        await this.plaqueZone.fill(name);
    }

    async writeMasseVide (name){
        await this.masseVideText.fill(name);
    }

    async writeChargement(name){
        await this.chargementText.fill(name);
    }
    async writeEssieux(name){
        await this.essieuxText.fill(name);
    }
    async writeBadge(name){
        await this.badgeText.fill(name);
    }
    async clickTypeDrop(){
        await this.typeDrop.click();
    }
    async clickCreateSousButton(){
        await this.sousCreate.click();
    }
    async clickSousDrop(){
        await this.sousDrop.click();
    }
    async clickVehicleTypeDrop(){
        await this.vehicleTypeDrop.click();
    }
    async clickTransDrop(){
        await this.transDrop.click();
    }

    async transSelect(trans){
        await this.clickTransDrop();
        await this.page.getByLabel(trans).getByText(trans).click();   
    }

    async typeSelect(type){
        await this.clickTypeDrop();
        await this.page.getByLabel(type).getByText(type).click();   
    }
    async vehicleTypeSelect(type){
        await this.clickVehicleTypeDrop();
        await this.page.getByLabel(type).getByText(type).click();   
    }
    async sousSelect(name){
        await this.clickSousDrop();
        await this.page.getByLabel(name).getByText(name).click();   
    }
    async clickValidate(){
        await this.validateButton.click();
    }

    async clickClose(){
        await this.closeButton.click();
    }
    async clickCreateEntreprise(){
        await this.createEntrepriseButton.click();
    }


}