import {BucketListModel} from './bucketlist.model';
import {DiscussionModel} from "./discussion.model";
import {DreamModel} from "./dream.model";
import {MessagesModel} from "./messages.model";

export interface UserModel {
    id?:string ;
    lastname:string ;
    firstname:string ;
    Email: string|number ;
    password: undefined;
    connected :boolean;
    dreamsData: DreamModel[];
    BucketListData: BucketListModel[];
    discussionData: DiscussionModel[];
    messagesData: MessagesModel[];
}
