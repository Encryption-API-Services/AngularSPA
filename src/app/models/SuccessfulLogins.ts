export default class SuccessfulLogins {
    public id: string;
    public userId: string;
    public ip: string;
    public userAgent: string;
    public city: string;
    public country: string;
    public timeZone: string;
    public wasThisMe: boolean;
    public hasBeenChecked: boolean;
    public createTime: Date;

    constructor(id: string, userId: string, ip: string, UserAgent: string, city: string, country: string, 
        timeZone: string, wasThisMe: boolean, hasBeenChecked: boolean, createTime: Date) {
        this.id = id;
        this.userId = userId;
        this.ip = ip;
        this.userAgent = UserAgent;
        this.city = city;
        this.country = country;
        this.timeZone = timeZone;
        this.wasThisMe = wasThisMe;
        this.hasBeenChecked = hasBeenChecked;
        this.createTime = createTime;
    }
}