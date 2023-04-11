import HashMap = java.util.HashMap;
import { ChannelSession } from "./ChannelSession";
export declare namespace ChannelSessionManager {
    function addChannel(sbn: any): void;
    function getChannelList(): HashMap<string, ChannelSession>;
    function hasChannelByID(id: string): boolean;
    function getChannelByID(id: string): ChannelSession | null;
}
