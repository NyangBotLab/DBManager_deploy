import { NUMSTRING } from "../chat";
export interface MentionsAttach {
    /**
     * 유저 아이디
     */
    user_id: NUMSTRING;
    /**
     * 위치
     */
    at: number[];
    /**
     * 길이
     */
    len: string;
}
export interface MentionListAttach {
    mentions: MentionsAttach[];
}
export interface ReplyAttach extends MentionListAttach {
    src_linkId: number;
    src_logId: string;
    src_message: string;
    src_type: number;
    src_userId: number;
}
export interface FileAttach extends MentionListAttach {
    cs: string;
    expire: number;
    k: string;
    name: string;
    s: number;
    size: number;
    url: string;
}
export interface PhotoAttach extends MentionListAttach {
    cs: string;
    h: number;
    k: string;
    mt: number;
    s: number;
    thumbnailHeight: number;
    thumbnailUrl: string;
    thumbnailWidth: number;
    url: string;
    w: number;
}
export interface MultiPhotoAttach extends MentionListAttach {
    csl: string[];
    hl: number[];
    imageUrls: string[];
    kl: string[];
    mtl: string[];
    sl: number[];
    thumbnailHeights: number[];
    thumbnailUrls: number[];
    thumbnailWidths: number[];
    wl: number[];
}
export interface EmoticonAttach extends MentionListAttach {
    alt: string;
    name: string;
    path: string;
    type: string;
}
export interface BigEmoticonAttach extends EmoticonAttach {
    sound: string;
    width: number;
    height: number;
    xconVersion: string;
    msg: string;
}
export interface PCEmoticonAttach extends EmoticonAttach {
    height: number;
    sound: string;
    width: number;
    msg: string;
}
export interface MobileEmoticonAttach extends EmoticonAttach {
    s: string;
}
export interface OldEmoticonAttach extends MentionListAttach {
    mentions: MentionsAttach[];
    alt: string;
    name: string;
    sound: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
    url: string;
}
export interface VideoAttach extends MentionListAttach {
    url: string;
    tk: string;
    cs: string;
    s: number;
    d: number;
    w: number;
    h: number;
    urlh: string;
    tkh: string;
    csh: string;
    sh: number;
    dh: number;
    wh: number;
    hh: number;
}
export interface AudioAttach extends MentionListAttach {
    "url": string;
    "d": number;
    "s": number;
    "k": string;
    "expire": number;
}
export interface MapAttach extends MentionListAttach {
    lat: number;
    lng: number;
    a: string;
    t: string;
    c: boolean;
}
export interface ProfileAttach extends MentionListAttach {
    accountId: string;
    userid: string;
    nickName: string;
    userType: number;
}
