import type { ChannelCommon, ChatType, UserInfoType } from "../../types";
import { Chat, User } from "../../Manager";
import { Channel } from "../../Manager/ChannelManager";
export declare namespace Mapper {
    function setUserKey(key: string): void;
    function cursorToChatObject(cursor: android.database.Cursor, prefix?: string): ChatType<any>;
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
    function openLinkMapper(cursor: android.database.Cursor, userKey?: string, prefix?: string): Record<string, any>;
}
