import { Chat } from './Chat';
import type { ProfileAttach, ProfileChatType } from '../../types';
export declare class ProfileChat extends Chat {
    constructor(obj: ProfileChatType);
    get profile(): ProfileAttach;
    isProfile(): this is ProfileChat;
}
