import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);

            if (user) {
                // call login if user created
                return this.loginUser(email, password);
            } else {
                return
            }
        } catch (error) {
            console.log("Appwrite :: Error creating account : ", error.message);
        }
    }

    async loginUser({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite :: Error signing in : ", error.message)
        }
    }

    async logoutUser() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite :: Error logging out : ", error.message);
        }
    }

    async getUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite :: Error fetching user : ", error.message);
        }

        return null;
    }
}

const authService = new AuthService();

export default authService;
