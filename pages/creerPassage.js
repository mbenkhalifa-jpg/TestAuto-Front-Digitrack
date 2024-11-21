exports.creerMatiereModalPage =  class CreerMatiereModalPage {

    constructor (page)
    {
        this.page = page
        this.nomZone = page.locator('#createMailleForm').getByRole('textbox')
        this.filDrop = page.locator('p-dropdown').filter({ hasText: 'ISDI' }).getByLabel('dropdown trigger')
        this.valoRemploiRadio =  page.getByRole('radio').first();
        this.valoRecycleRadio = page.getByRole('radio').nth(1);
        this.valoNullRadio = page.getByRole('radio').nth(2);
        this.typeDrop = page.getByRole('button', { name: 'dropdown trigger' }).nth(2);
        this.popTrueRadio = page.getByRole('radio').nth(3);
        this.popFalseRadio = page.getByRole('radio').nth(4);
        this.appDrop = page.locator('p-multiselect div').nth(4);
        this.addFileButton = page.locator('a').filter({ hasText: '+ Ajouter des fichiers' });
        this.codeDechetDrop = page.locator('p-dropdown').filter({ hasText: '010101 (déchets provenant de' }).getByLabel('dropdown trigger');
        this.familleDrop = page.getByRole('button', { name: 'dropdown trigger' }).nth(3);
        this.codeMateriauDrop =  page.getByRole('button', { name: 'dropdown trigger' }).nth(4)
        this.closeButton = page.locator('#mailleCreationModal').getByText('FERMER')
        this.validateButton = page.locator('#mailleCreationModal').getByText('VALIDER')
        this.xButton = page.getByRole('img', { name: 'clip' })
        this.emissionChamp = page.getByRole('spinbutton');
        this.recycleTrueRadio = page.getByRole('radio').first();
        this.recycleFalseRadio = page.getByRole('radio').nth(2);

    }

    async writeNom (name){
        await this.nomZone.fill(name);
    }

    async clickfilDrop(){
        await this.filDrop.click();
    }

    async filSelect(filiere){

        await this.clickfilDrop();
        await this.page.getByText(filiere).click();
    }

    async checkRecycleTrueRadio(){
        await this.recycleTrueRadio.click();
    }


    async checkRecycleFalseRadio(){
        await this.recycleFalseRadio.click();
    }


    async checkRemploi(){
        await this.valoRemploiRadio.check()
    }

    async checkRecycle(){
        await this.valoRecycleRadio.check()
    }

    async checkValoNull(){
        await this.valoNullRadio.check()
    }

    async clickTypeDrop(){
        await this.typeDrop.click()
    }

    async clickCodeDechetDrop(){
        await this.codeDechetDrop.click()
    }

    async codeDechetSelect(codeDechet){
        await this.clickCodeDechetDrop();
        await this.page.getByText(codeDechet).click();    
    }

    async clickCodeMateriauDrop(){
        await this.codeMateriauDrop.click()
    }


    async codeMateriauSelect(codeMateriau){
        await this.clickCodeMateriauDrop();
        await this.page.getByText(codeMateriau, { exact: true }).click();    
    }

    async clickFamilleDrop(){
        await this.familleDrop.click();
    }

    async familleSelect(famille){
        await this.clickFamilleDrop();
        await this.page.getByLabel(famille).getByText(famille).click();   
    }

    async dechetSelect(){
        this.clickTypeDrop()
    }

    async typeSelect(type){
        await this.clickTypeDrop();
        await this.page.getByLabel(type).getByText(type).click();
  
    }

    async checkPopTrue(){
        await this.popTrueRadio.click()
    }

    async checkPopFalse(){
        await this.popFalseRadio.click()
    }

    async addFile(){
        await this.addFileButton.click();
    }

    async clickAppDrop(){
        await this.appDrop.click()
    }

    async selectApp(app){
       this.clickAppDrop();
       await this.page.getByLabel(app).click(); 
    }

    async clickFile()
    {
        this.addFileButton.click();
    }

    async fillModale(name,filiere)
    {
        this.writeNom(name);
        this.filSelect(filiere);
        //this.checkRecycleTrueRadio();
        //this.typeSelect(type);
        //this.familleSelect(famille);
        //this.codeMateriauSelect(codeMateriau);
    }
    async validate()
    {
        this.validateButton.click();
    }


    
    
    

    
}