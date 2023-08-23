import { Chat } from './Chat';
import type { FileAttach, FileChatType } from '../../types';
export declare class FileChat extends Chat {
    constructor(obj: FileChatType);
    isFile(): this is FileChat;
    get file(): FileAttach;
}
