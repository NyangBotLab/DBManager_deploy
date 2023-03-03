export interface OpenVField {
    "openlink": {
        "li": string;
        "report": boolean;
        "pli": string;
        "mt": number;
        "ptp": number;
        "pv": string;
    };
}
export interface UserVField {
    "countryIso": string;
}
export interface BoardVField {
    "fullAnimatedProfileImageUrl": string;
    "originalAnimatedProfileImageUrl": string;
}
export interface UserCommonInterface {
    _id: string;
    contact_id: string;
    id: string;
    type: number;
    uuid: string;
    phone_number: string;
    raw_phone_number?: string | null;
    name: string;
    phonetic_name?: any | null;
    profile_image_url: string;
    full_profile_image_url: string;
    original_profile_image_url: string;
    status_message: string;
    chat_id: string;
    brand_new: boolean;
    blocked: boolean;
    favorite: boolean;
    position: number;
    v: object | string;
    board_v: object | "";
    ext: string;
    nick_name: string;
    user_type: number;
    story_user_id?: string | null;
    account_id: string;
    linked_services?: string | null;
    hidden: boolean;
    purged: boolean;
    suspended: boolean;
    member_type: number;
    involved_chat_ids: string[];
    contact_name?: null | string;
    enc: number;
    created_at: string;
    new_badge_updated_at: string;
    new_badge_seen_at: string;
    status_action_token: string;
}
export interface OpenUserInfoType extends UserCommonInterface {
    v: OpenVField;
    board_v: "";
}
export interface UserInfoType extends UserCommonInterface {
    v: UserVField;
    board_v: BoardVField;
}
