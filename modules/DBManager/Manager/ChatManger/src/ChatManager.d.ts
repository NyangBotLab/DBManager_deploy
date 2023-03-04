import { Chat } from "./ChatClass";
import { User } from "../../UserManger";
export declare class ChatManager {
    private db;
    private userKey;
    private static _instance;
    private constructor();
    static getInstance(db?: android.database.sqlite.SQLiteDatabase | null, userKey?: string): ChatManager;
    /**
     * 대신 getInstance()를 쓰세요
     * @deprecated
     */
    static getAlreadyInstance(): ChatManager;
    getChatByLogID(logId: string, addUser?: boolean): Chat | null;
    getUnderChat(logId: string, addUser?: boolean): Chat | null;
    getChatStack(from?: string | undefined, to?: string | undefined): Chat[];
    getLastChat(addUser?: boolean): Chat | null;
    getOneUserByID(id: string): User | null;
    getMultipleUsersByIDs(ids: string[], makeGroup?: boolean): User[] | Record<keyof User, User>;
}
