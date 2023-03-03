import type TypedEventEmitter from 'typed-emitter';
import { ChatManager, MemberTypeChangedFeed } from "../../ChatManger";
import type { Chat, InviteFeed, LeaveFeed, OpenChatJoinedFeed, OpenChatKickedFeed, DeleteFeed } from "../../ChatManger";
import { ChannelComponent, ChannelManager } from "../../ChannelManager";
declare const DBManager_base: new () => TypedEventEmitter<MessageEvents>;
export declare class DBManager extends DBManager_base {
    private static _instance;
    private readonly packageName;
    private readonly userKey;
    private readonly db;
    private readonly chatManager;
    private obs;
    private lastChat;
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
}
type MessageEvents = {
    "message": (chat: Chat, channel: ChannelComponent | null) => void;
    "delete": (chat: DeleteFeed, channel: ChannelComponent | null) => void;
    "hide": (chat: Chat, channel: ChannelComponent | null) => void;
    "leave": (chat: LeaveFeed, channel: ChannelComponent | null) => void;
    "join": (chat: OpenChatJoinedFeed, channel: ChannelComponent | null) => void;
    "invite": (chat: InviteFeed, channel: ChannelComponent | null) => void;
    "kick": (chat: OpenChatKickedFeed | LeaveFeed, channel: ChannelComponent | null) => void;
    "member_type_change": (chat: MemberTypeChangedFeed, channel: ChannelComponent | null) => void;
};
export {};
