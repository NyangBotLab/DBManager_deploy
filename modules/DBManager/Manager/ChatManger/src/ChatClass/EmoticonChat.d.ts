import { Chat } from "./Chat";
import type { User } from "../../../UserManger";
import type { BigEmoticonAttach, EmoticonChatType, MobileEmoticonAttach, PCEmoticonAttach } from "../../../../types";
export declare class EmoticonChat extends Chat {
    protected _mentions: User[];
    constructor(obj: EmoticonChatType);
    /**
     * 이모티콘을 가져옵니다
     */
    get emoticon(): (BigEmoticonAttach | PCEmoticonAttach | MobileEmoticonAttach) & import("../../../../types").MentionListAttach;
    /**
     * 맨션된 사람들 리스트를 가져옵니다
     */
    get mentions(): User[];
    isEmoticon(): this is EmoticonChat;
}
