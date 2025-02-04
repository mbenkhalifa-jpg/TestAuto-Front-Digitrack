exports.MenuPage =  class MenuPage {

    constructor (page)
    {

        this.page = page
        this.menuButton = page.locator('div').filter({ hasText: 'Menu site altaroad ' }).locator('svg').first()
        this.creaButton = page.getByRole('button', { name: 'CRÉATION DES PASSAGES' })
        this.gestButton = page.getByRole('button', { name: 'PASSAGES', exact: true })
        this.recotButton = page.getByRole('button', { name: 'DOCUMENTS IMPORTÉS' })
        this.vdsButton = page.getByRole('button', { name: 'VUE DE SYNTHÈSE' })
        this.envButton = page.getByRole('button', { name: 'BILAN ENVIRONNEMENTAL' })
        this.dataButton = page.getByRole('button', { name: 'DONNÉES INCOMPLÈTES' })
        this.confButton = page.getByRole('button', { name: 'CONFIGURATION' })
        this.matButton = page.getByRole('button', { name: 'MATÉRIAUX' })
        this.provButton = page.getByRole('button', { name: 'PROVENANCES' })
        this.destButton = page.getByRole('button', { name: 'DESTINATIONS' })
        this.truckButton = page.getByRole('button', { name: 'CAMIONS' })
        this.transButton = page.getByRole('button', { name: 'TRANSPORTEURS' })
        this.entButton = page.getByRole('button', { name: 'ENTREPRISES' })
        this.filButton = page.getByRole('button', { name: 'FILIÈRES' })
        this.enerButton = page.getByText('ÉNERGIES')

    }
    
    async gotoCreaPage(){
        await this.menuButton.click()
        await this.creaButton.click();
    }

    async gotoGestPage()
    {
        await this.menuButton.click()
        await this.gestButton.click();
    }

    async gotoRecotPage()
    {
        await this.menuButton.click()
        await this.recotButton.click();
    }

    async gotoVdsPage()
    {
        await this.menuButton.click()
        await this.vdsButton.click();
    }

    async gotoEnvPage()
    {
        await this.menuButton.click()
        await this.envButton.click();
    }

    async gotoDataPage()
    {
        await this.menuButton.click()
        await this.dataButton.click();
    }

    async gotoMatPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.matButton.click();
    }

    async gotoProvPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.provButton.click();
    }

    async gotoDestPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.destButton.click();
    }
    

    async gotoTruckPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.truckButton.click();
    }

    async gotoTransPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.transButton.click();
    }

    async gotoEntPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.entButton.click();
    }

    async gotoVehiclePage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.vehicleButton.click();
    }

    async gotoFilPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.filButton.click();
    }
    async gotoEnerPage()
    {
        await this.menuButton.click()
        await this.confButton.click();
        await this.enerButton.click();
    }
    
    async gotoLoginPage(){
        await this.page.goto('https://ecs-staging.altaroad.fr/');
    }
}


