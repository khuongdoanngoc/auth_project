import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(private configService: ConfigService) {
        super({
            datasources: {
                db: {
                    url: configService.get('DATABASE_URL'),
                },
            },
        });
    }

    // async onModuleInit() {
    //     try {
    //         await this.$connect();
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         console.log('connect to db successfully!');
    //     }
    // }
}
