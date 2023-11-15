import type { ChannelCommon, ChannelType, OpenChannelV, OpenLinkType } from '../../types';
import type { User } from '../user';
import { Channel } from './channel';
export declare class OpenChannel extends Channel {
    protected _openLink: OpenLinkType;
    protected _host: User;
    get host(): User;
    constructor(obj: ChannelCommon);
    get raw(): ChannelType<"OM" | "OD", OpenChannelV>;
    set openChannel(openLink: OpenLinkType);
    /**
     * 오픈채팅 정보를 가져옵니다
     * @return OpenLinkType
     */
    get openChannel(): OpenLinkType;
    /**
     * 오픈채팅 정보를 가져옵니다.
     * @return OpenLinkType
     */
    get openLink(): OpenLinkType;
    toJSON(): {
        channel: ChannelCommon;
        openLink: OpenLinkType;
    };
}
export declare class OpenMultiChannel extends OpenChannel {
    get raw(): ChannelType<"OM", OpenChannelV>;
    toJSON(): {
        channel: ChannelCommon;
        openLink: OpenLinkType;
    };
}
export declare class OpenDirectChannel extends OpenChannel {
    get raw(): ChannelType<"OD", OpenChannelV>;
    toJSON(): {
        channel: ChannelCommon;
        openLink: OpenLinkType;
    };
}
