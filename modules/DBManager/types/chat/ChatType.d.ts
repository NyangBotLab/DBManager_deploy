import type { AudioAttach, BigEmoticonAttach, FileAttach, MapAttach, MentionListAttach, MobileEmoticonAttach, MultiPhotoAttach, OldEmoticonAttach, PCEmoticonAttach, PhotoAttach, ReplyAttach, VideoAttach } from "../attachment";
import type { FeedAttach } from "../message";
export type NUMSTRING = string;
export interface VFields {
    notDecoded: boolean;
    origin: string;
    c: string;
    isSingleDefaultEmoticon: boolean;
    defaultEmoticonsCount: number;
    isMine: boolean;
    enc: number;
}
export interface ChatType {
    _id: NUMSTRING;
    id: NUMSTRING;
    type: number;
    chat_id: string;
    user_id: string;
    message: string | FeedAttach;
    attachment: null | "" | object;
    created_at: string;
    deleted_at: string;
    client_message_id: string;
    prev_id: string;
    referer: number;
    supplement?: object | null;
    v: VFields | null;
}
type ChatExtends = Omit<ChatType, "attachment">;
export interface NormalChatType extends ChatExtends {
    attachment: MentionListAttach | null | "";
}
export interface PhotoChatType extends ChatExtends {
    attachment: PhotoAttach;
}
export interface MultiPhotoChatType extends ChatExtends {
    attachment: MultiPhotoAttach;
}
export interface EmoticonChatType extends ChatExtends {
    attachment: (BigEmoticonAttach | MobileEmoticonAttach | PCEmoticonAttach) & MentionListAttach;
}
export interface OldEmoticonChatType extends ChatExtends {
    attachment: OldEmoticonAttach;
}
export interface ReplyChatType extends ChatExtends {
    attachment: ReplyAttach & MentionListAttach;
}
export interface FileChatType extends ChatExtends {
    attachment: FileAttach;
}
export interface VideoChatType extends ChatExtends {
    attachment: VideoAttach;
}
export interface AudioChatType extends ChatExtends {
    attachment: AudioAttach;
}
export interface MapChatType extends ChatExtends {
    attachment: MapAttach;
}
export {};
