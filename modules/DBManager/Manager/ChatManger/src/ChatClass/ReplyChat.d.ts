import { Chat } from "./Chat";
import type { ReplyChatType } from "../../../../types";
import type { User } from "../../../UserManger";
export declare class ReplyChat extends Chat {
    constructor(obj: ReplyChatType);
    /**
     * 맨션된 사람들의 리스트를 가져옵니다
     */
    get mentions(): User[];
    /**
     * 답장 정보를 가져옵니다
     */
    get source(): Chat | null;
    isReply(): this is ReplyChat;
}
