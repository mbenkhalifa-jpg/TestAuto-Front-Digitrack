exports.SousTypeModalePage =  class SousTypeModalePage {

    constructor (page)
    {
        this.page = page
        this.nameZone = page.locator('#truckSubTypeForm').getByRole('textbox')
        this.typeDrop = page.getByLabel('ÉVACUATION', { exact: true })
        this.masseVideText = page.getByRole('spinbutton').first()
        this.chargementText = page.getByRole('spinbutton').nth(1)
        this.volumeText = page.getByRole('spinbutton').nth(2)
        this.facteurText = page.getByRole('spinbutton').nth(3)
        this.validateButton = page.locator('app-button').filter({ hasText: 'VALIDER' }).locator('div')

    }



  
    async writeName (name){
        await this.nameZone.fill(name);
    }

    async writeMasseVide (name){
        await this.masseVideText.fill(name);
    }

    async writeChargement(name){
        await this.chargementText.fill(name);
    }
    async writeVolume(name){
        await this.volumeText.fill(name);
    }
    async writeFacteur(name){
        await this.facteurText.fill(name);
    }
    async clickTypeDrop(){
        await this.typeDrop.click();
    }
   
    async typeSelect(type){
        await this.clickTypeDrop();
        await this.page.getByLabel(type).getByText(type).click();   
    }
  
    async clickValidate(){
        await this.validateButton.click();
    }




}