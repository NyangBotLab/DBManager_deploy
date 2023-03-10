import type { MentionsAttach } from "../attachment";
interface V {
    "pushAlert": boolean;
    "display_user_ids": string;
    "enc": number;
    "origin": string;
    "token": number;
    "log_meta_synced_revision": string;
    "last_checked_unread_mention": string;
}
interface OpenV {
    display_user_ids: string;
    first_entry: boolean;
    origin: string;
    token: number;
    log_meta_synced_revision: string;
    enc: number;
    last_checked_unread_mention: string;
    pushAlert: boolean;
    isLostChatLogExist: boolean;
}
export interface RoomCommon {
    "_id": string;
    "id": string;
    "type": "DirectChat" | "MultiChat" | "OM" | "OD";
    members: string[];
    active_member_ids: string[];
    last_log_id: string[];
    last_message: string[];
    last_updated_at: number;
    unread_count: number;
    watermarks: string[];
    temporary_message: {
        message: string;
        mentions: MentionsAttach[];
    };
    "v": OpenV | V;
    ext: null | string;
    last_read_log_id: string;
    last_update_seen_id: string;
    active_members_count: number;
    meta: any[];
    "invite_info": null;
    "blinded_member_ids": null | string[];
    "mute_until_at": null | any;
    "last_joined_log_id": string;
}
export interface RoomType extends RoomCommon {
    type: "DirectChat" | "MultiChat";
    "v": V;
}
export interface OpenRoomType extends RoomCommon {
    "is_hint": boolean;
    "private_meta": null | any[];
    "last_chat_log_type": string;
    "schat_token": null;
    "last_skey_token": null;
    "last_pk_tokens": null;
    "link_id": string;
    "moim_meta": null;
}
export {};
