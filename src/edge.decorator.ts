import { Inject } from "@nestjs/common";
import { EdgeService } from "./edge.service";

export const Render = (view: string): MethodDecorator => {
    const injectEdgeService = Inject(EdgeService);

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        injectEdgeService(target, 'edgeService');

        descriptor.value = async function(...args: any[]) {
            const edgeService: EdgeService = this['edgeService'];

            const result = await originalMethod.apply(this, args);

            return edgeService.render(view, result);
        }
    }
}