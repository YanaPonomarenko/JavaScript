class User {
    #login;
    constructor(login) {
        this.#login = login;        
    }
    show() {
        return this.#login;
    }
}export default User;