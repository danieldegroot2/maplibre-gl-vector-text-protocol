import type { SubClasses } from './worker';
export declare class Actor {
    subClass: any;
    worker: Worker;
    handlers: Map<string, {
        'res': (value: any) => void;
        'rej': (value: Error) => void;
    }>;
    ready: boolean;
    initId: string;
    constructor(subClass: SubClasses, args: Array<any>);
    onLoad(): Promise<unknown>;
    exec(command: string): () => Promise<any>;
    get(command: string): Promise<any>;
}
