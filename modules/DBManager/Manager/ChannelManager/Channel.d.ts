import type { OpenChannelType, ChannelCommon, OpenLinkType } from "../../types";
import { ChannelType } from "../../types";
export declare class Channel {
    protected _roomInfo: ChannelCommon;
    protected _id: string;
    protected _name: string;
    constructor(obj: ChannelCommon);
    get members(): import("..").User[] | null;
    isOpenChannel(): this is OpenChannel;
    get raw(): ChannelType<"DirectChat" | "MultiChat">;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": null | OpenLinkType;
    };
    set name(name: string);
    send(message: string): boolean;
    isGroupChat(): boolean;
    read(): boolean | undefined;
    get id(): string;
    get name(): string;
}
export declare class OpenChannel extends Channel {
    private _open_link;
    get host(): import("..").User | null;
    constructor(obj: ChannelCommon);
    get raw(): OpenChannelType<"OM" | "OD">;
    set openChatInfo(openLink: OpenLinkType);
    get openChatInfo(): OpenLinkType;
    isOpenChannel(): this is OpenChannel;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": OpenLinkType;
    };
}
