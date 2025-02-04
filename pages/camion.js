exports.CamionsPage =  class CamionsPage {

    constructor (page)
    {

        this.page = page
        this.creaButton = page.getByText('CRÉER UN CAMION')
        this.creaVehicleButton = page.getByText('CRÉER UN VÉHICULE')
        this.truckTab =  page.getByText('Tous les camions (1)');
        this.dayTruckTab = page.locator('div').filter({ hasText: 'Camions du jour' }).nth(4);
        this.bargeTab = page.locator('div').filter({ hasText: 'Barge ' }).nth(4);
        this.bandeTab = page.locator('div').filter({ hasText: 'Bande transporteuse' }).nth(4);
        this.wagonTab = page.locator('div').filter({ hasText: 'Wagon (4)' }).nth(4);
        this.searchBar = page.getByPlaceholder('Recherche par plaque');

    }

    async clickTruckTab(){
        await this.truckTab.click();
    }

    
    async clickDayTruckTab(){
        await this.dayTruckTab.click();
    }

    async clickBargeTab(){
        await this.bargeTab.click();
    }


    async clickBandeTab(){
        await this.bandeTab.click();
    }

    async clickWagonTab(){
        await this.wagonTab.click();
    }

    async clickCreaButton(){
        await this.creaButton.click();
    }

    async clickCreaVehicleButton(){
        await this.creaVehicleButton.click();
    }

    async clickCell(plaqueName){
        await  this.page.getByRole('cell', { name: plaqueName, exact: true }).click();
    }

    async clickSearchBar(){
        await this.searchBar.click();
    }

    async writeSearch (name){
        await this.searchBar.fill(name);
    }

}