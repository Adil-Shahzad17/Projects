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
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      if (error.code === 401) {
        console.log(
          "Unauthorized: Please ensure the user is logged in and has the necessary permissions."
        );
      }
    }
  }

  async logOut() {
    try {
      const user = await this.account.get();
      if (user) {
        await this.account.deleteSessions();
      }
    } catch (error) {
      console.log("LogOut Error", error);
      throw error;
    }
  }
}

const authservice = new authService();

export default authservice;
