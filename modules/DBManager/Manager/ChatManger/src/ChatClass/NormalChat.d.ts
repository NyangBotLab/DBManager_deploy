import { Chat } from "./Chat";
import type { NormalChatType } from "../../../../types";
import type { User } from "../../../UserManger";
export declare class NormalChat extends Chat {
    constructor(obj: NormalChatType);
    /**
     * 맨션된 사람들 리스트를 가져옵니다
     */
    get mentions(): User[];
    isNormal(): this is NormalChat;
}
