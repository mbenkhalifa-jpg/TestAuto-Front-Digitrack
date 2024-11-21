exports.MatierePage =  class MatierePage {

    constructor (page)
    {

        this.page = page
        this.creaButton = page.getByRole('link', { name: 'picto CRÉER UN MATÉRIAU' })
        this.importButton = page.getByRole('link', { name: 'picto IMPORTER MATÉRIAUX' })
        this.exportButton = page.getByRole('link', { name: 'picto EXPORTER' })
        this.refreshButton = page.getByRole('link', { name: 'picto ACTUALISER' })
        this.searchZone =   page.getByPlaceholder('Recherche')
        this.openTab = page.getByText('Ouverts', { exact: false })
        this.closedTab = page.getByText('Fermés', { exact: false })
        this.waitingTab = page.getByText('En attente', { exact: false })
        this.archivedTab = page.getByText('Archivés', { exact: false })

      
    }

    async clickOpenTab(){
        await this.openTab.click();
    }
    
    async clickClosedTab(){
        await this.closedTab.click();
    }

    async clickCreaButton(){
        await this.creaButton.click();
    }
    
}