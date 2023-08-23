export interface ChannelV {
    pushAlert: boolean;
    display_user_ids: string;
    enc: number;
    origin: string;
    token: number;
    log_meta_synced_revision: string;
    last_checked_unread_mention: string;
}
export interface OpenChannelV extends ChannelV {
    /**
     * 보이는 유저 아이디
     */
    first_entry: boolean;
    isLostChatLogExist: boolean;
}
export type CHANNEL_TYPE = 'DirectChat' | 'MultiChat' | 'OM' | 'OD';
export interface ChannelCommon {
    _id: string;
    id: string;
    type: CHANNEL_TYPE;
    private_meta: any;
    last_log_id: string;
    last_message: string;
    last_updated_at: number;
    active_member_ids: string[];
    unread_count: number;
    v: OpenChannelV | ChannelV;
    is_hint: boolean;
    last_read_log_id: string;
    active_members_count: number;
    meta: any[];
    link_id: string | null;
    last_joined_log_id: string;
}
export interface ChannelType<T extends CHANNEL_TYPE = CHANNEL_TYPE, U extends ChannelV | OpenChannelV = ChannelV> extends ChannelCommon {
    type: T;
    v: U;
}
