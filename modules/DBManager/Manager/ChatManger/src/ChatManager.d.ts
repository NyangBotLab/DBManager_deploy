import { Chat } from "./ChatClass";
import { User } from "../../UserManger";
import { Room } from "../../RoomManger";
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
    private getPrevChatID;
    private getNextChatID;
    getPrevChatByID(logId: string, count?: number): Chat | null;
    getNextChatByID(logId: string, count?: number): Chat | null;
    getChatStack(from?: string | undefined, to?: string | undefined, addUser?: boolean): Chat[];
    getLastChat(addUser?: boolean): Chat | null;
    getOneUserByID(id: string): User | null;
    getMultipleUsersByIDs(ids: string[], makeGroup?: boolean): {};
    getOneRoomByID(id: string): Room | null;
    getMembersByRoomID(id: string): User[] | null;
    rawQuery(query: string, values: any[]): null | Record<string, any>[];
}
