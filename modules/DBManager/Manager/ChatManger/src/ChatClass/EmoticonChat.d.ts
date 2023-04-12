import { Chat } from "./Chat";
import type { User } from "../../../UserManger";
import type { EmoticonChatType, MentionListAttach } from "../../../../types";
export declare class EmoticonChat extends Chat {
    private _mentions;
    constructor(obj: EmoticonChatType);
    /**
     * 이모티콘을 가져옵니다
     */
    get emoticon(): (import("../../../../types").BigEmoticonAttach | import("../../../../types").PCEmoticonAttach | import("../../../../types").MobileEmoticonAttach) & MentionListAttach;
    /**
     * 맨션된 사람들 리스트를 가져옵니다
     */
    get mentions(): User[];
    isEmoticon(): this is EmoticonChat;
}
