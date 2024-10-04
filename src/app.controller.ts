import { Controller, Get } from "@nestjs/common";

@Controller("app")
export class AppController{
    constructor(){

    }

    @Get('/login')
    login():string{
        return 'login route';
    }
}