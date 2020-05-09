import { Photo } from "./photo";

export interface Challenge {
    node: string;
    depth: number;
    photos: Photo[];
}
