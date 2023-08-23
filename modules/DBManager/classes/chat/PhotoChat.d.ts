import { Chat } from './Chat';
import type { PhotoAttach, PhotoChatType } from '../../types';
export declare class PhotoChat extends Chat {
    constructor(obj: PhotoChatType);
    /**
     * 사진을 가져옵니다
     */
    get photo(): PhotoAttach;
    isPhoto(): this is PhotoChat;
}
