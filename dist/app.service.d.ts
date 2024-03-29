import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class AppService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(data: any): Promise<User>;
    findUser(condition: any): Promise<User>;
}
