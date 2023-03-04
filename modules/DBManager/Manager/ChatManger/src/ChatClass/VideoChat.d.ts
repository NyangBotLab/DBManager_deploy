import { Chat } from "./Chat";
import type { VideoAttach, VideoChatType } from "../../../../types";
export declare class VideoChat extends Chat {
    constructor(obj: VideoChatType);
    /**
     * 사진을 가져옵니다
     */
    get video(): VideoAttach;
    isVideo(): this is VideoChat;
}
