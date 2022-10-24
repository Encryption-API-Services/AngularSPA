export default class RegisterUserFormObject {
    public email: string;
    public password: string;

    constructor(email: string, password: string) {
        this.password = password;
        this.email = email;
    }
}