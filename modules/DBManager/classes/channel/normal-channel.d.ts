import type { ChannelType, ChannelV } from '../../types';
import { Channel } from './channel';
export declare class DirectChannel extends Channel {
    get raw(): ChannelType<"DirectChat", ChannelV>;
}
export declare class MultiChannel extends Channel {
    get raw(): ChannelType<"MultiChat", ChannelV>;
    /**
     * 팀채팅인지 확인합니다.
     * @return boolean
     */
    isTeamChannel(): boolean;
}
