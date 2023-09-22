export interface OpenVField {
    openlink: {
        li: string;
        report: boolean;
        pli: string;
        mt: number;
        ptp: number;
        pv: string;
    };
}
export interface UserVField {
    countryIso: string;
    memorial?: boolean;
}
export interface BoardVField {
    fullAnimatedProfileImageUrl: string;
    originalAnimatedProfileImageUrl: string;
}
export interface UserCommonType<V = any, B = any> {
    id: string;
    _id: string;
    nick_name: string;
    type: number;
    name: string;
    profile_image_url: string;
    full_profile_image_url: string;
    original_profile_image_url: string;
    status_message: string;
    blocked: boolean;
    v: V;
    board_v: B;
    user_type: number;
    account_id: string;
    member_type: number;
    enc: number;
    created_at: string;
    involved_chat_ids: string[];
}
export type OpenUserInfoType = UserCommonType<OpenVField, ''>;
export type UserInfoType = UserCommonType<UserVField, BoardVField>;
