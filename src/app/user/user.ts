export class User {
    private name: string;
    private email: string;
    // private mobile: string;

    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(value: string) {
        this.email = value;
    }

    public static fromObject(obj): User {
        let userRef: User = new User();
        Object.assign(userRef, obj);
        return userRef;
    }
    
}