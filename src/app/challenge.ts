import { Photo } from "./photo";

export interface Challenge {
    nodeId: string;
    photoGroupId: string;
    children: Photo[];
}
