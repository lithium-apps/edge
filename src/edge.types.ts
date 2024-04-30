import type { EdgeService } from "./edge.service";

export interface EdgeConfig {
    processor?: EdgeProcessor;

    mount: MountOptions;
    globalConfig?: Record<string, any>;
    plugins?: EdgePluginEntrypoint[] | EdgePlugin[];
    tags?: EdgeTag[];
    templates?: EdgeTemplate[];
}

export type MountOptions = string | URL | Record<string, any>

interface EdgeProcessor {
    cache?: boolean;
}

export interface EdgePlugin {
    entrypoint: EdgePluginEntrypoint;
    options?: Record<string, any>;
}

export type EdgePluginEntrypoint = (edge: EdgeService, firstRun: boolean, options?: Record<string, any>) => void;

export interface EdgeTag {
    block: boolean;
    seekable: boolean;
    tagName: string;

    compile(parser: any, buffer: any, token: any): void;
}

export interface EdgeTemplate {
    path: string;
    template: string;
}