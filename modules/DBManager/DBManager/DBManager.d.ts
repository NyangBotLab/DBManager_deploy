import type TypedEventEmitter from 'typed-emitter';
import { Channel } from '../classes';
import { DBUtil } from '../utils/db_util';
import { Mapper } from '../utils';
import type { InstanceType, MessageEvents } from '../types';
declare const DBManager_base: new () => TypedEventEmitter<MessageEvents>;
export declare class DBManager extends DBManager_base {
    static mapper: typeof Mapper;
    static getChannelById: typeof Channel.get;
    static decrypt: (userId: string | number | typeof java.lang.Long, enc: number, text: string) => string;
    static rawQuery(query: string, value: any[]): Record<string, any>[] | null;
    static utils: typeof DBUtil;
    private _isWakeLock;
    private static _instance;
    private readonly _packageName;
    private readonly _userKey;
    private readonly _db;
    private readonly _db2;
    private _dbObs;
    private _userObs;
    private _lastID?;
    private _threadPool;
    private _reactByMine;
    private constructor();
    static getInstance(init?: InstanceType): DBManager;
    addChannel(sbn: any): void;
    private _onEvent;
    private _onUserEvent;
    start(): boolean;
    private _runDB;
    stop(): boolean;
    close(): void;
    setWakeLock(setWakeLock: boolean): void;
}
export {};
