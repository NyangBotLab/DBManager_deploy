import type { AudioAttach, BigEmoticonAttach, FileAttach, MapAttach, MentionListAttach, MobileEmoticonAttach, MultiPhotoAttach, OldEmoticonAttach, PCEmoticonAttach, PhotoAttach, ProfileAttach, ReplyAttach, VideoAttach } from '../attachment';
import type { FeedAttach } from '../message';
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
export interface ChatType<N = number, T = any> {
    id: NUMSTRING;
    _id: NUMSTRING;
    deleted_at: string;
    supplement?: unknown | null;
    referer: number;
    type: N;
    chat_id: string;
    user_id: string;
    message: string | FeedAttach;
    attachment: T;
    created_at: string;
    prev_id: string;
    v: VFields | null;
}
export type NormalChatType = ChatType<1, MentionListAttach | null | ''>;
export type PhotoChatType = ChatType<2, PhotoAttach>;
export type MultiPhotoChatType = ChatType<27, MultiPhotoAttach>;
export type EmoticonChatType = ChatType<12 | 20 | 25, BigEmoticonAttach | MobileEmoticonAttach | PCEmoticonAttach>;
export type OldEmoticonChatType = ChatType<6, OldEmoticonAttach>;
export type ReplyChatType = ChatType<26, ReplyAttach<20, BigEmoticonAttach | MobileEmoticonAttach | PCEmoticonAttach>>;
export type FileChatType = ChatType<18, FileAttach>;
export type VideoChatType = ChatType<3, VideoAttach>;
export type AudioChatType = ChatType<5, AudioAttach>;
export type MapChatType = ChatType<16, MapAttach>;
export type ProfileChatType = ChatType<17, ProfileAttach>;
