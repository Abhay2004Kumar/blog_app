import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint(conf.appwriteUrl) // Your API Endpoint
//     .setProject(conf.appwriteProjectId);                 // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     '@example.com', 
//     'password'
// );

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email,password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password, name)
            if(userAccount){
                // call another method
                this.login({email, password})

            }else{
                return userAccount
            }
        } catch (error) {
          throw error; 
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            )
        } catch (error) {
            throw error
        }
    }
}

const  authService = new AuthService()

export default authService;

