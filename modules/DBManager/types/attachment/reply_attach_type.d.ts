export interface ReplyAttach<N = 0, T = null> {
    attach_only: N extends 0 ? false : true;
    attach_content?: T;
    attach_type: number;
    src_linkId: number;
    src_logId: string;
    src_message: string;
    src_type: number;
    src_userId: number;
    src_mentions: string[];
}
