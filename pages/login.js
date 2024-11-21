exports.LoginPage =  class LoginPage {

    constructor (page)
    {
        this.page = page
        this.username_textbox = page.getByLabel('Adresse e-mail ou nom d\'')
        this.password_textbox = page.getByLabel('Mot de passe')
        this.login_button = page.getByRole('button', { name: 'Se connecter' })

    }
    
    async gotoLoginPage(){
        await this.page.goto('https://ecs-staging.altaroad.fr/');
    }

    async login(username,password)
    {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
}