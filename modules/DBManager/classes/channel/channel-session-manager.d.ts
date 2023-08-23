import { ChannelSession } from './channel-session';
export declare namespace ChannelSessionManager {
    function addChannel(sbn: any): void;
    function getChannelList(): Record<string, ChannelSession>;
    function hasChannelByID(id: string): boolean;
    function getChannelByID(id: string | number): ChannelSession | null;
}
