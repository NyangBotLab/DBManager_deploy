import type { User } from '../../classes';
export * from './channel_type';
export * from './open_link_type';
export interface ChannelCountInfo {
    user: User;
    count: number;
}
export interface CountOption {
    /**
     * 피드(입퇴장, 삭제 요청 가리기 요청 등) 포함
     */
    includeFeed?: boolean;
    /**
     * 시작 날짜
     * @default new Date(0)
     */
    startDate?: Date;
    /**
     * 끝 날짜
     * @default new Date()
     */
    endDate?: Date;
}
