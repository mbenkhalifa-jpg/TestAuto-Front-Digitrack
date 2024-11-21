exports.CreerEntrepriseModalePage =  class CreerEntrepriseModalePage {

    constructor (page)
    {

        this.page = page
        this.nomZone = page.locator('input[name="name"]');
        this.siretZone = page.locator('.col-sm-12 > .p-inputtext');
        this.addressZone = page.locator('#wording')
        this.codepostalZone = page.locator('.p-field > .p-inputtext').first()
        this.villeZone = page.locator('div:nth-child(2) > .p-field > .p-inputtext')
        this.contactZone = page.locator('.form-group > .p-field > .p-inputtext')
        this.telZone = page.getByRole('spinbutton')
        this.emailZone = page.locator('input[type="email"]');
        this.closeButton = page.locator('app-button').filter({ hasText: 'FERMER' }).locator('div');
        this.validateButton = page.locator('app-button').filter({ hasText: 'VALIDER' }).locator('div');
        this.listElement = page.locator('li').nth(0);


    }



  
    async writeNom (name){
        await this.nomZone.fill(name);
    }

    async writeSiret (name){
        await this.siretZone.fill(name);
    }

    async writeAddress(name){
        await this.addressZone.fill(name);
    }
    async writeCodePostal(name){
        await this.codepostalZone.fill(name);
    }


    async writeVille (name){
        await this.villeZone.fill(name);
    }

    async writeAddress(name){
        await this.addressZone.fill(name);
    }
    async writeContact(name){
        await this.contactZone.fill(name);
    }
    
    async writeTel(name){
        await this.telZone.fill(name);
    }
    async writeEmail(name){
        await this.emailZone.fill(name);
    }
    
    async clickValidate(){
        await this.validateButton.click();
    }

    async clickClose(){
        await this.closeButton.click();
    }

    async clickListElement(){
        await this.listElement.click();
    }
}