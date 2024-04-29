import { DynamicModule, Module } from "@nestjs/common";

import { EdgeService } from "./edge.service";
import type { EdgeConfig } from "./edge.types";

@Module({})
export class EdgeModule {
    static async forFeature(config?: EdgeConfig): Promise<DynamicModule> {
        return {
            module: EdgeModule,
            providers: [
                {
                    provide: 'EDGE_CONFIG',
                    useValue: config
                },
                EdgeService
            ],
            exports: [EdgeService],
        };
    }
}