import { Chat } from './Chat';
import { VideoAttach, VideoChatType } from '../../types';
export declare class VideoChat extends Chat {
    constructor(obj: VideoChatType);
    /**
     * 동영상을 가져옵니다
     */
    get video(): VideoAttach;
    isVideo(): this is VideoChat;
}
