export interface Status {
    code: number;
    message: string;
}

export interface PropertyImage {
    src: string;
    caption: string;
    responsiveImgList: { width: number, src: string; }[];
}

export enum PropertyStatus {
    ACTIVE = 'active',
    EXPIRED = 'expired'
}

export interface PropertyType {
    id: string;
    title: string;
    publishedOnLabel: string;
    publishedOn: string;
    image: PropertyImage;
    flag: string;
    priceTitle: string;
    price: string;
    address: string;
    status: PropertyStatus;
}

export interface PropertyListResponse {
    status: Status;
    data: PropertyType[];
}