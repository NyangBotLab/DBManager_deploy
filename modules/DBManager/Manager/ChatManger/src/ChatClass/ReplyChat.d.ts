import { Chat } from "./Chat";
import type { ReplyAttach, ReplyChatType } from "../../../../types";
export declare class ReplyChat extends Chat {
    private _chatSource;
    constructor(obj: ReplyChatType);
    /**
     * Attachment를 가져옵니다
     */
    get emoticon(): ReplyAttach;
    /**
     * 답장 정보를 가져옵니다
     */
    get source(): Chat;
    isReply(): this is ReplyChat;
}
