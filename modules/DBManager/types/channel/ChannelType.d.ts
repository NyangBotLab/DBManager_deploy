interface V {
    "pushAlert": boolean;
    "display_user_ids": string;
    "enc": number;
    "origin": string;
    "token": number;
    "log_meta_synced_revision": string;
    "last_checked_unread_mention": string;
}
interface OpenV extends V {
    /**
     * 보이는 유저 아이디
     */
    first_entry: boolean;
    isLostChatLogExist: boolean;
}
type CHANNEL_TYPE = "DirectChat" | "MultiChat" | "OM" | "OD";
export interface ChannelCommon {
    "_id": string;
    "id": string;
    "type": CHANNEL_TYPE;
    last_log_id: string;
    last_message: string;
    last_updated_at: number;
    unread_count: number;
    "v": OpenV | V;
    "is_hint": boolean;
    last_read_log_id: string;
    active_members_count: number;
    meta: any[];
    "link_id": string | null;
    "last_joined_log_id": string;
}
export interface ChannelType<T extends CHANNEL_TYPE> extends ChannelCommon {
    type: T;
    "v": V;
}
export interface OpenChannelType<T extends CHANNEL_TYPE> extends ChannelCommon {
    type: T;
    "v": OpenV;
}
export {};
