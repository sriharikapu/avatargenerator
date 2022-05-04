/// <reference types="node" />
import LRU from 'lru-cache';
import { ICache } from '../common';
export declare class MemoryCache implements ICache {
    private map;
    getOrCreate(id: string, createCallback: () => Promise<Buffer>): Promise<Buffer>;
}
export declare class LRUCache implements ICache {
    private lru;
    constructor(options?: LRU.Options<string, Buffer>);
    getOrCreate(id: string, createCallback: () => Promise<Buffer>): Promise<Buffer>;
}
export declare class FolderCache implements ICache {
    private location;
    constructor(location?: string);
    getOrCreate(id: string, createCallback: () => Promise<Buffer>): Promise<Buffer>;
}
export declare class ComposeCache implements ICache {
    private caches;
    constructor(caches: ICache[]);
    getOrCreate(id: string, createCallback: () => Promise<Buffer>): Promise<Buffer>;
    private static _getOrCreate;
}
