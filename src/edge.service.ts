import { Inject, Injectable } from "@nestjs/common";
import { EdgeConfig, EdgePlugin, EdgePluginEntrypoint, EdgeTag, EdgeTemplate, MountOptions } from "./edge.types";

@Injectable()
export class EdgeService {
    private processor: any;
    private edge: any;

    constructor(@Inject('EDGE_CONFIG') private readonly config: EdgeConfig) {
        this.loadProcessor()
            .then(() => this.applyConfig());
    }

    private async loadProcessor() {
        this.processor = (await import('edge.js')).Edge;
        this.edge = this.processor.create(this.config?.processor);
    }

    private applyConfig() {
        if (!this.config)
            return;

        if (this.config.mount)
            this.multipleMount(this.config.mount);

        if (this.config.globalConfig)
            this.multipleGlobals(this.config.globalConfig);

        if (this.config.plugins)
            this.multipleUse(this.config.plugins);

        if (this.config.tags)
            this.registerTags(this.config.tags);

        if (this.config.templates)
            this.registerTemplates(this.config.templates);
    }

    use(pluginFn: any, options: Record<string, any>) {
        this.edge.use(pluginFn, options);
        return this;
    }

    multipleUse(plugins: EdgePlugin[] | EdgePluginEntrypoint[]) {
        for (const plugin of plugins) {
            switch (typeof plugin) {
                case 'object':
                    this.use(plugin.entrypoint, plugin.options);
                    break;

                default:
                    this.use(plugin, {});
                    break;
            }
        }

        return this;
    }

    mount(keyOrDirectory: string, viewsDirectory?: string) {
        this.edge.mount(keyOrDirectory, viewsDirectory);
        return this;
    }

    multipleMount(options: MountOptions) {
        switch (typeof options) {
            case 'object':
                for (const key in options)
                    this.edge.mount(key, options[key]);
                break;

            default:
                this.edge.mount(options)
                break;
        }

        return this;
    }

    unmount(diskName: string) {
        this.edge.unmount(diskName);
        return this;
    }

    global(key: string, value: any) {
        this.edge.global(key, value);
        return this;
    }

    multipleGlobals(values: Record<string, any>) {
        for (const key in values) {
            this.global(key, values[key]);
        }

        return this;
    }

    registerTag(tag: EdgeTag) {
        this.edge.registerTag(tag);
        return this;
    }

    registerTags(tags: EdgeTag[]) {
        for (const tag of tags) {
            this.registerTag(tag);
        }

        return this;
    }

    registerTemplate(name: string, contents: { template: string }) {
        this.edge.template(name, contents);
        return this;
    }

    registerTemplates(templates: EdgeTemplate[]) {
        for (const template of templates) {
            this.registerTemplate(template.path, {
                template: template.template
            });
        }
    }

    removeTemplate(name: string) {
        this.edge.removeTemplate(name);
        return this;
    }

    onRender(callback: (renderer: any) => void) {
        this.edge.onRender(callback)
        return this;
    }

    createRenderer() {
        return this.edge.createRenderer();
    }

    render(view: string, data: Record<string, any>): Promise<string> {
        return this.edge.render(view, data);
    }

    renderSync(view: string, data: Record<string, any>): string {
        return this.edge.renderSync(view, data);
    }

    renderRaw(view: string, data: Record<string, any>): Promise<string> {
        return this.edge.renderRaw(view, data);
    }

    renderRawSync(view: string, data: Record<string, any>): string {
        return this.edge.renderRawSync(view, data);
    }

    share(data: Record<string, any>) {
        return this.edge.share(data);
    }
}