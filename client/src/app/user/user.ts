import { Bucket } from '../note/bucket';

export class User {
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    buckets: Bucket[];
    // createdAt: Date;
    // updatedAt: Date;

    constructor(){
        this.name = "";
    }
}
