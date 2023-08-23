import { Chat } from './Chat';
import type { MobileEmoticonAttach, ReplyChatType } from '../../types';
export declare class ReplyChat extends Chat {
    private _chatSource;
    constructor(obj: ReplyChatType);
    /**
     * 답장 정보를 가져옵니다
     */
    get source(): Chat;
    get emoticon(): MobileEmoticonAttach | null;
    isReply(): this is ReplyChat;
}
