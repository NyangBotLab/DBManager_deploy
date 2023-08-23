import { Chat } from './Chat';
import type { OldEmoticonAttach, OldEmoticonChatType } from '../../types';
export declare class OldEmoticonChat extends Chat {
    constructor(obj: OldEmoticonChatType);
    /**
     * 구버전 이모티콘을 가져옵니다
     */
    get emoticon(): OldEmoticonAttach;
    isOldEmoticon(): this is OldEmoticonChat;
}
