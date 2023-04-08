import type TypedEventEmitter from 'typed-emitter';
import type { Chat, DeleteFeed, InviteFeed, LeaveFeed, OpenChatJoinedFeed, OpenChatKickedFeed } from "../../ChatManger";
import { ChatManager, MemberTypeChangedFeed } from "../../ChatManger";
import { Channel, ChannelManager } from "../../ChannelManager";
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
    static getInstance(packageName: string, userKey: string, getRoot?: boolean): DBManager;
    requestPermission(): void;
    getChatManager(): ChatManager;
    getChannelManager(): typeof ChannelManager;
    addChannel(sbn: any): void;
    onEvent(event: number, path: string): void;
    start(): boolean;
    stop(): boolean;
    close(): void;
    setWakeLock(setWakeLock: boolean): void;
}
type MessageEvents = {
    "message": (chat: Chat, channel: Channel | null) => void;
    "delete": (chat: DeleteFeed, channel: Channel | null) => void;
    "hide": (chat: Chat, channel: Channel | null) => void;
    "leave": (chat: LeaveFeed, channel: Channel | null) => void;
    "join": (chat: OpenChatJoinedFeed, channel: Channel | null) => void;
    "invite": (chat: InviteFeed, channel: Channel | null) => void;
    "kick": (chat: OpenChatKickedFeed | LeaveFeed, channel: Channel | null) => void;
    "member_type_change": (chat: MemberTypeChangedFeed, channel: Channel | null) => void;
};
export {};
