import { Chat } from "./Chat";
import type { ReplyChatType } from "../../../../types";
import { User } from "../../../UserManger";
export declare class ReplyChat extends Chat {
    private readonly _source;
    private readonly _mentions;
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
