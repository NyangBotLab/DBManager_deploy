import { Chat } from './Chat';
import type { MobileEmoticonAttach, EmoticonChatType } from '../../types';
export declare class EmoticonChat extends Chat {
    constructor(obj: EmoticonChatType);
    /**
     * 이모티콘을 가져옵니다
     */
    get emoticon(): MobileEmoticonAttach;
    /**
     * 맨션된 사람들 리스트를 가져옵니다
     */
    isEmoticon(): this is EmoticonChat;
}
