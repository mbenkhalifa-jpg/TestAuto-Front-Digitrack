exports.EntreprisePage =  class EntreprisePage {

    constructor (page)
    {

        this.page = page
        this.creaButton =  page.getByRole('link', { name: 'picto CRÉER UNE ENTREPRISE' })
        this.entCell = page.getByRole('cell', { name: 'LIKSI' })
    }

    
    async clickCreaButton(){
        await this.creaButton.click();
    }

    async clickCell(){
        await  this.entCell.click();
    }

    
    
}