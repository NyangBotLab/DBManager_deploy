import { Chat } from './Chat';
import type { MapAttach, MapChatType } from '../../types';
export declare class MapChat extends Chat {
    constructor(obj: MapChatType);
    /**
     * 지도 정보를 가져옵니다
     */
    get map(): MapAttach;
    isMap(): this is MapChat;
}
