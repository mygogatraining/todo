import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    public baseUrl: string = environment.BASEURL;

    constructor() {

    }
    
}