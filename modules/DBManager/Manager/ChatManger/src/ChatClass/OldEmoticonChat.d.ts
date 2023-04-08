import { Chat } from "./Chat";
import type { OldEmoticonAttach, OldEmoticonChatType } from "../../../../types";
import type { User } from "../../../UserManger";
export declare class OldEmoticonChat extends Chat {
    constructor(obj: OldEmoticonChatType);
    /**
     * 맨션된 사람들 리스트를 가져옵니다
     */
    get mentions(): User[];
    /**
     * 구버전 이모티콘을 가져옵니다
     */
    get emoticon(): OldEmoticonAttach;
    isOldEmoticon(): this is OldEmoticonChat;
}
