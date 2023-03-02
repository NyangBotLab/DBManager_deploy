import HashMap = java.util.HashMap;
import { ChannelComponent } from "./ChannelComponent";
export declare namespace ChannelManager {
    function addChannel(sbn: any): void;
    function getChannelList(): HashMap<string, ChannelComponent>;
    function hasChannelByID(id: string): boolean;
    function getChannelByID(id: string): ChannelComponent | null;
}
