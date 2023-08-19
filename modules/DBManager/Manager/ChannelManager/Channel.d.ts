import type { Chat } from "../ChatManager";
import type { ChannelCommon, ChannelType, OpenLinkType, ChannelV, OpenChannelV } from "../../types";
import type { User } from "../UserManager";
export declare class Channel {
    protected _roomInfo: ChannelCommon;
    protected _id: string;
    protected _host: User | null;
    protected _name: string;
    protected _members: User[];
    protected _lastChat: Chat;
    constructor(obj: ChannelCommon);
    get members(): User[];
    /**
     * @deprecated
     * 대신 isOpenChannel을 사용하세요(v2에 제거됨)
     */
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
    /**
     * @deprecated
     * 대신 isGroupChannel을 사용하세요(v2에 제거됨)
     */
    isGroupChat(): boolean;
    isGroupChannel(): boolean;
    read(): boolean | undefined;
    get id(): string;
    get name(): string;
    get host(): User | null;
    /**
     * @deprecated
     * 대신 isMultiChannel 사용하세요(v2에 제거됨)
     */
    isMultiChat(): this is MultiChannel;
    isMultiChannel(): this is MultiChannel;
    /**
     * @deprecated
     * 대신 isDirectChannel을 사용하세요(v2에 제거됨)
     */
    isDirectChat(): this is DirectChannel;
    isDirectChannel(): this is DirectChannel;
    /**
     * @deprecated
     * 대신 isOpenMultiChannel을 사용하세요(v2에 제거됨)
     */
    isOpenMultiChat(): this is OpenMultiChannel;
    isOpenMultiChannel(): this is OpenMultiChannel;
    /**
     * @deprecated
     * 대신 isOpenDirectChannel 사용하세요(v2에 제거됨)
     */
    isOpenDirectChat(): this is OpenDirectChannel;
    isOpenDirectChannel(): this is OpenDirectChannel;
}
export declare class DirectChannel extends Channel {
    get raw(): ChannelType<"DirectChat", ChannelV>;
    /**
     * @deprecated
     * 대신 isDirectChannel을 사용하세요(v2에 제거됨)
     */
    isDirectChat(): this is DirectChannel;
}
export declare class MultiChannel extends Channel {
    get raw(): ChannelType<"MultiChat", ChannelV>;
    /**
     * @deprecated
     * 대신 isGroupChannel 사용하세요(v2에 제거됨)
     */
    isGroupChat(): this is MultiChannel;
    isGroupChannel(): this is MultiChannel;
    /**
     * @deprecated
     * 대신 isMultiChannel을 사용하세요(v2에 제거됨)
     */
    isMultiChat(): this is MultiChannel;
}
export declare class OpenChannel extends Channel {
    protected _open_link: OpenLinkType;
    protected _host: User;
    get host(): User;
    constructor(obj: ChannelCommon);
    get raw(): ChannelType<"OM" | "OD", OpenChannelV>;
    set openChatInfo(openLink: OpenLinkType);
    /**
     * @deprecated
     * 대신 openLink를 사용하세요(v2에 제거됨)
     */
    get openChatInfo(): OpenLinkType;
    get openLink(): OpenLinkType;
    /**
     * @deprecated
     * 대신 isOpenChannel을 사용하세요(v2에 제거됨)
     */
    isOpenChat(): this is OpenChannel;
    isOpenChannel(): this is OpenChannel;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": OpenLinkType;
    };
    /**
     * @deprecated
     * 대신 isGroupChannel을 사용하세요(v2에 제거됨)
     */
    isGroupChat(): this is OpenMultiChannel;
    isGroupChannel(): this is OpenMultiChannel;
}
export declare class OpenMultiChannel extends OpenChannel {
    get raw(): ChannelType<"OM", OpenChannelV>;
    /**
     * @deprecated
     * 대신 isOpenMultiChannel을 사용하세요(v2에 제거됨)
     */
    isOpenMultiChat(): this is OpenMultiChannel;
    isOpenMultiChannel(): this is OpenMultiChannel;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": OpenLinkType;
    };
}
export declare class OpenDirectChannel extends OpenChannel {
    get raw(): ChannelType<"OD", OpenChannelV>;
    /**
     * @deprecated
     * 대신 isOpenDirectChannel 사용하세요(v2에 제거됨)
     */
    isOpenDirectChat(): this is OpenDirectChannel;
    isOpenDirectChannel(): this is OpenDirectChannel;
    toJSON(): {
        "channel": ChannelCommon;
        "openLinkInfo": OpenLinkType;
    };
}
