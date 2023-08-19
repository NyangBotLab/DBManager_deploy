import type TypedEventEmitter from 'typed-emitter';
import type { Chat, DeleteFeed, InviteFeed, KickedFeed, LeaveFeed, MemberTypeChangedFeed, OpenChatJoinedFeed } from "../../ChatManager";
import { ChatManager } from "../../ChatManager";
import { ChannelSessionManager } from "../../ChannelSessionManager";
import type { Channel } from "../../ChannelManager";
declare const DBManager_base: new () => TypedEventEmitter<MessageEvents>;
export declare class DBManager extends DBManager_base {
    private isWakeLock;
    private static _instance;
    private readonly packageName;
    private readonly userKey;
    private readonly db;
    private readonly chatManager;
    private obs;
    private _lastID?;
    private constructor();
    static getInstance(packageName: string, userKey: string | null, getRoot?: boolean): DBManager;
    requestPermission(): void;
    /**
     *  @deprecated
     *  v2에서 제거 예정
     */
    getChatManager(): ChatManager;
    /**
     *  @deprecated
     *  v2에서 제거 예정
     */
    getChannelManager(): typeof ChannelSessionManager;
    get lastID(): string | undefined;
    /**
     * @deprecated
     * v2에서 static으로 변경 예정
     */
    rawQuery(query: string, value: any[]): Record<string, any>[] | null;
    addChannel(sbn: any): void;
    onEvent(event: number, path: string): void;
    start(): boolean;
    stop(): boolean;
    close(): void;
    setWakeLock(setWakeLock: boolean): void;
}
export type MessageEvents = {
    "message": (chat: Chat, channel: Channel) => void;
    "delete": (chat: DeleteFeed, channel: Channel) => void;
    "hide": (chat: Chat, channel: Channel) => void;
    "leave": (chat: LeaveFeed, channel: Channel) => void;
    "join": (chat: OpenChatJoinedFeed, channel: Channel) => void;
    "invite": (chat: InviteFeed, channel: Channel) => void;
    "kick": (chat: KickedFeed, channel: Channel) => void;
    "member_type_change": (chat: MemberTypeChangedFeed, channel: Channel) => void;
};
export {};
