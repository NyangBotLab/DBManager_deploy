import { UserCommonInterface } from "../../../types";
export declare class UserManger {
    private db;
    private userKey;
    private static _instance;
    private constructor();
    static getInstance(db: android.database.sqlite.SQLiteDatabase, userKey: string): UserManger;
    cursorToUser(cursor: android.database.Cursor): UserCommonInterface;
}
