import { Chat } from "./Chat";
import { AudioAttach, AudioChatType } from "../../../../types";
export declare class AudioChat extends Chat {
    constructor(obj: AudioChatType);
    isAudio(): this is AudioChat;
    get audio(): AudioAttach;
}
