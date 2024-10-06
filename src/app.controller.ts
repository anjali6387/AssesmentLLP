import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController{
    constructor(){

    }

    @Get('/login')
    login():string{
        return 'login route';
    }
    @Get()
    getHello():string{
        return "hello world"
    }
}