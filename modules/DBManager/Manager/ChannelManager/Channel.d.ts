import type { Chat } from "../ChatManger";
import type { ChannelCommon, ChannelType, OpenLinkType, ChannelV, OpenChannelV } from "../../types";
import type { User } from "../UserManger";
export declare class Channel {
    protected _roomInfo: ChannelCommon;
    protected _id: string;
    protected _host: User | null;
    protected _name: string;
    protected _members: User[];
    protected _lastChat: Chat;
    constructor(obj: ChannelCommon);
    get members(): User[];
    isOpenChat(): this is OpenChannel;
    isOpenChannel(): this is OpenChannel;
    get raw(): ChannelCommon;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": null | OpenLinkType;
    };
    get lastChat(): Chat;
    set name(name: string);
    send(message: string): boolean;
    isGroupChat(): boolean;
    isGroupChannel(): boolean;
    read(): boolean | undefined;
    get id(): string;
    get name(): string;
    get host(): User | null;
    isMultiChat(): this is MultiChannel;
    isMultiChannel(): this is MultiChannel;
    isDirectChat(): this is DirectChannel;
    isDirectChannel(): this is DirectChannel;
    isOpenMultiChat(): this is OpenMultiChannel;
    isOpenMultiChannel(): this is OpenMultiChannel;
    isOpenDirectChat(): this is OpenDirectChannel;
    isOpenDirectChannel(): this is OpenDirectChannel;
}
export declare class DirectChannel extends Channel {
    get raw(): ChannelType<"DirectChat", ChannelV>;
    isDirectChat(): this is DirectChannel;
}
export declare class MultiChannel extends Channel {
    get raw(): ChannelType<"MultiChat", ChannelV>;
    isGroupChat(): this is MultiChannel;
    isGroupChannel(): this is MultiChannel;
    isMultiChat(): this is MultiChannel;
}
declare class OpenChannel extends Channel {
    protected _open_link: OpenLinkType;
    protected _host: User;
    get host(): User;
    constructor(obj: ChannelCommon);
    get raw(): ChannelType<"OM" | "OD", OpenChannelV>;
    set openChatInfo(openLink: OpenLinkType);
    get openChatInfo(): OpenLinkType;
    isOpenChat(): this is OpenChannel;
    isOpenChannel(): this is OpenChannel;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": OpenLinkType;
    };
    isGroupChat(): this is OpenMultiChannel;
    isGroupChannel(): this is OpenMultiChannel;
}
export declare class OpenMultiChannel extends OpenChannel {
    get raw(): ChannelType<"OM", OpenChannelV>;
    isOpenMultiChat(): this is OpenMultiChannel;
    isOpenMultiChannel(): this is OpenMultiChannel;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": OpenLinkType;
    };
}
export declare class OpenDirectChannel extends OpenChannel {
    get raw(): ChannelType<"OD", OpenChannelV>;
    isOpenDirectChat(): this is OpenDirectChannel;
    isOpenDirectChannel(): this is OpenDirectChannel;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": OpenLinkType;
    };
}
export {};
