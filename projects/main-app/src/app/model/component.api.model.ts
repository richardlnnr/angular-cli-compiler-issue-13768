export interface ComponentAPIModel {
    code: string;
    id: string;
    minimumSize: number;
    name: string;
    nativeComponent: boolean;
    scripts?: string[];
    styles?: string[];
    thumbnail: string;
}
