import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
export declare class AppController {
    private readonly appService;
    private jwtService;
    constructor(appService: AppService, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<import("./user.entity").User>;
    login(email: string, password: string): Promise<string>;
}
