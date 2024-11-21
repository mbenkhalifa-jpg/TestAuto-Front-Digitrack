exports.TransporteurPage =  class TransporteurPage {

    constructor (page)
    {

        this.page = page
        this.creaButton = page.getByText('CRÉER UN TRANSPORTEUR')
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

    async clickCell(transporterName){
        await  this.page.getByRole('cell', { name: "TEST1", exact: true }).click();
    }

    
    
}