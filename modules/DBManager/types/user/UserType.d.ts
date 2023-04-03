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
    id: string;
    type: number;
    name: string;
    profile_image_url: string;
    full_profile_image_url: string;
    original_profile_image_url: string;
    status_message: string;
    blocked: boolean;
    v: object | string;
    board_v: object | "";
    user_type: number;
    account_id: string;
    member_type: number;
    enc: number;
    created_at: string;
}
export interface OpenUserInfoType extends UserCommonInterface {
    v: OpenVField;
    board_v: "";
}
export interface UserInfoType extends UserCommonInterface {
    v: UserVField;
    board_v: BoardVField;
}
