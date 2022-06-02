import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    register(name: string, email: string, password: string): Promise<import("./user.entity").User>;
}
