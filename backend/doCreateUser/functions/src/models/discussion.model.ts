import {MessagesModel} from "./messages.model";

export interface DiscussionModel{

    id?:string;
    users: string;
    messagesData:MessagesModel[];
}
