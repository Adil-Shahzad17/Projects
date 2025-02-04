import { Client, ID, Account } from "appwrite";
import config from "./config";

export class authService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Login User Error", error);
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log("Get Current User Error");
    }
    return null;
  }

  async logOut() {
    try {
      const user = await this.account.get();
      if (user) {
        await this.account.deleteSessions();
      }
    } catch (error) {
      console.log("LogOut Error", error);
    }
  }
}

const authservice = new authService();

export default authservice;
