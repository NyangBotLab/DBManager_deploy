import { Chat } from "./Chat";
import type { User } from "../../../UserManger";
import type { EmoticonChatType } from "../../../../types";
export declare class EmoticonChat extends Chat {
    protected _mentions: User[];
    constructor(obj: EmoticonChatType);
    /**
     * 이모티콘을 가져옵니다
     */
    get emoticon(): (import("../../../../types").BigEmoticonAttach | import("../../../../types").PCEmoticonAttach | import("../../../../types").MobileEmoticonAttach) & import("../../../../types").MentionListAttach;
    /**
     * 맨션된 사람들 리스트를 가져옵니다
     */
    get mentions(): User[];
    isEmoticon(): this is EmoticonChat;
}
