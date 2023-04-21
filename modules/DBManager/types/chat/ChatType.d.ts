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
export interface ChatType<T = any> {
    id: NUMSTRING;
    _id: NUMSTRING;
    type: number;
    chat_id: string;
    user_id: string;
    message: string | FeedAttach;
    attachment: T;
    created_at: string;
    prev_id: string;
    v: VFields | null;
}
export type NormalChatType = ChatType<MentionListAttach | null | "">;
export type PhotoChatType = ChatType<PhotoAttach>;
export type MultiPhotoChatType = ChatType<MultiPhotoAttach>;
export type EmoticonChatType = ChatType<(BigEmoticonAttach | MobileEmoticonAttach | PCEmoticonAttach) & MentionListAttach>;
export type OldEmoticonChatType = ChatType<OldEmoticonAttach>;
export type ReplyChatType = ChatType<ReplyAttach & MentionListAttach>;
export type FileChatType = ChatType<FileAttach>;
export type VideoChatType = ChatType<VideoAttach>;
export type AudioChatType = ChatType<AudioAttach>;
export type MapChatType = ChatType<MapAttach>;
