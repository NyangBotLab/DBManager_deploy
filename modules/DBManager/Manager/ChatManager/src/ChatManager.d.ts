import { Chat } from "./ChatClass";
import { User } from "../../UserManager";
export declare class ChatManager {
    private db;
    private userKey;
    private static _instance;
    private constructor();
    static getInstance(db?: android.database.sqlite.SQLiteDatabase | null, userKey?: string): ChatManager;
    getChatUserByLogID(logId: string): Chat | null;
    getUnreadMember(channelID: string, chat_log_ids: string): User[];
    getReadMember(channelID: string, chat_log_ids: string): User[];
    getPrevChat(chat: Chat, count?: number): Chat | null;
    getNextChat(chat: Chat, count?: number): Chat | null;
    getChatStack(from?: string | undefined, to?: string | undefined): Chat[];
    getLastID(): string | undefined;
    getOneUserByID(id: string): User | null;
    getMultipleUsersByIDs(ids: string[], makeGroup?: boolean): {};
    getDisplayName(ids: string[]): string;
    private _getMinIdsToUsers;
    getMembersByRoomID(id: string): User[] | null;
    rawQuery(query: string, values: any[]): null | Record<string, any>[];
}
