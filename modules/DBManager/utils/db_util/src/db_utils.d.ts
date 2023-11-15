import type { User } from '../../../classes';
import type { Chat } from '../../../classes';
import type { ChannelCountInfo } from '../../../types';
import type { Channel } from '../../../classes';
export type UserChangeLog = {
    user_id: string;
    chat_id: string;
    b_name: string;
    b_profile_image_url: string;
    b_full_profile_image_url: string;
    b_original_profile_image_url: string;
    a_name: string;
    a_profile_image_url: string;
    a_full_profile_image_url: string;
    a_original_profile_image_url: string;
};
export declare namespace DBUtil {
    function init(db: android.database.sqlite.SQLiteDatabase, userKey: string): void;
    function getChatUserByLogID(logId: string): Chat | null;
    function getUnreadMember(channelID: string, chat_log_ids: string): User[];
    function getChannelInfoById(channelID: string): Channel | null;
    function getReadMember(channelID: string, chat_log_ids: string): User[];
    function getPrevChat(chat: Chat, count?: number): Chat | null;
    function getLastChatsByChannel(count: number | undefined, channelID: string): Chat[];
    function getNextChat(chat: Chat, count?: number): Chat | null;
    function getChatStack(from?: string | undefined, to?: string | undefined): Chat[];
    function getLastID(): string | undefined;
    function getOneUserByID(id: string): User | null;
    function getMultipleUsersByIDs(ids: string[], makeGroup?: boolean): {};
    function getDisplayName(ids: string[]): string;
    function getMembersByRoomID(id: string): User[] | null;
    function rawQuery(query: string, values: any[]): null | Record<string, any>[];
    function cursorToObject(cursor: android.database.Cursor): Record<string, any>[];
    function getCountGroupByUser(chat_id: string, startTime: number, endTime: number, includesFeed: boolean): ChannelCountInfo[];
}
