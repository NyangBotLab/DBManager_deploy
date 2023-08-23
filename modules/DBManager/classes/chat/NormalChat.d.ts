import { Chat } from './Chat';
import type { NormalChatType } from '../../types';
export declare class NormalChat extends Chat {
    constructor(obj: NormalChatType);
    isNormal(): this is NormalChat;
}
