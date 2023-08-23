import { Chat } from './Chat';
import type { MultiPhotoAttach, MultiPhotoChatType } from '../../types';
export declare class MultiPhotoChat extends Chat {
    constructor(obj: MultiPhotoChatType);
    /**
     * 사진 정보를 가져옵니다
     */
    get photoList(): MultiPhotoAttach;
    isMultiPhoto(): this is MultiPhotoChat;
}
