export interface EmoticonAttach {
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
export type EmoticonComplex = BigEmoticonAttach | PCEmoticonAttach | MobileEmoticonAttach;
export interface OldEmoticonAttach {
    alt: string;
    name: string;
    sound: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
    url: string;
}
