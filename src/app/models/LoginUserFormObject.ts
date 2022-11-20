export default class RegisterUserFormObject {
    public email: string;
    public password: string;
    public userAgent: string;

    constructor(email: string, password: string, userAgent: string) {
        this.password = password;
        this.email = email;
        this.userAgent = userAgent;
    }
}