exports.CreerTransporteurModalePage =  class CreerTransporteurModalePage {

    constructor (page)
    {

        this.page = page
        this.nomZone = page.getByRole('textbox').nth(1)
        this.recepisseZone = page.getByRole('textbox').nth(2)
        this.drZone =  page.getByRole('spinbutton')
        this.entrepriseDrop = page.getByRole('combobox').nth(1)
        this.entrepriseText  = page.locator('#dropdown [selected="selected"]')
        this.createEntrepriseButton = page.locator('a').filter({ hasText: 'Créer une entreprise' })
        this.validateButton = page.locator('#editCreateTransporterModal').getByText('VALIDER')
        this.raisonSocialeText = page.locator('#label').nth(2);
        
    }



    async writeNom (name){
        await this.nomZone.fill(name);
    }

    async writeRecepisse (name){
        await this.recepisseZone.fill(name);
    }

    async writeDR(name){
        await this.drZone.fill(name);
    }
    async clickEntrepriseDrop(){
        await this.entrepriseDrop.click();
    }
    
    async entrepriseSelect(entreprise){
        await this.clickEntrepriseDrop();
        await this.page.getByLabel(entreprise).getByText(entreprise).click();   
    }
    
    async clickValidate(){
        await this.validateButton.click();
    }

    async clickCreateEntreprise(){
        await this.createEntrepriseButton.click();
    }


}