import type { ChannelCommon, ChatType, UserInfoType } from '../../types';
import { Chat, Channel, User } from '../../classes';
export declare namespace Mapper {
    function setUserKey(key: string): void;
    function cursorToChatObject(cursor: android.database.Cursor, prefix?: string): ChatType<number, any>;
    function chatMapper(obj: ChatType): Chat;
    function cursorToChat(cursor: android.database.Cursor, prefix?: string): Chat;
    function cursorToChannelObject(cursor: android.database.Cursor, userKey?: string, prefix?: string): Record<string, any>;
    function channelMapper(obj: ChannelCommon): Channel;
    function cursorToChannel(cursor: android.database.Cursor, userKey?: string, prefix?: string): Channel;
    function cursorToAll(cursor: android.database.Cursor, userKey?: string): Chat;
    function cursorToChatUser(cursor: android.database.Cursor, userKey?: string): Chat;
    function cursorToUserObject(cursor: android.database.Cursor, prefix?: string): UserInfoType;
    function userMapper(user: UserInfoType, userKey?: string): User;
    function cursorToUser(cursor: android.database.Cursor, userKey?: string, prefix?: string): User;
    function cursorToOpenLink(cursor: android.database.Cursor, prefix?: string): Record<string, any>;
}
