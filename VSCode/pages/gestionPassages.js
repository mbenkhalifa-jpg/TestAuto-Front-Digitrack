exports.gestionPassagesPage =  class gestionPassagesPage {

    constructor (page)
    {
        this.page = page
        this.searchZone = page.getByPlaceholder('plaque, matériau, provenance')
        this.importButton = page.getByRole('link', { name: 'picto IMPORTER PASSAGES' })
        this.createButton =  page.getByRole('button', { name: 'CRÉER UN PASSAGE' })
        this.exportButton  = page.getByRole('link', { name: 'picto EXPORTER' })
        this.advancedButton = page.getByText('recherche avancée ˅')
        this.newTab = page.getByText('Passages à vérifier', { exact: false })
        this.completedTab = page.getByText('Passages à compléter', { exact: false })
        this.broadcastedTab = page.getByText('Bons archivés', { exact: false })
        this.moeTab = page.getByText('En attente moe', { exact: false })
        this.moaTab = page.getByText('En attente moa', { exact: false })
        this.cellPassage =  page.locator('td:nth-child(5)').first();
        this.adminPlq = page.locator('td:nth-child(2)').first();
        this.passagePlate = page.locator('td:nth-child(6)').first();
        this.passageCreationDate = page.locator('td:nth-child(4)').first();

    }

    async clickCell (){
        await this.cellPassage.click();
    }

    async clickImport (){
        await this.importButton.click();
    }

    async clickCreate (){
        await this.createButton.click();
    }

    async exportCreate(){
        await this.exportButton.click();
    }


}