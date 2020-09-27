import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import {cert} from "./cred/cert";
import DocumentReference = admin.firestore.DocumentReference;
import {UserModel} from "./models/user.model";


admin.initializeApp({
 credential: admin.credential.cert(cert),
 databaseURL: "https://initium-4fb1f.firebaseio.com"

});

const db= admin.firestore();
const refUser = db.collection('users');

 export const doCreateUser = functions
    .region("europe-west3")
    .runWith({
     timeoutSeconds:10,
     memory:"256MB",
    })
    .https
     .onRequest(async(req, res:any)=> {
      try{
       const newUser = req.body;
       const result = await postNewUser(newUser);
       return res.send(result);
      } catch (e){
       return res.status(500).send({error: 'erreur serveur:'})
      }
         }
     )
    export async function postNewUser(newUser: UserModel): Promise<UserModel> {
       if (!newUser) {
      throw new Error(`new user do not exist`);
     }
   const addResult: DocumentReference = await refUser.add(newUser);
   return {...newUser, id: addResult.id};
}

