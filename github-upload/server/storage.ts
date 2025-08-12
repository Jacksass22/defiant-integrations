import { users, type User, type InsertUser, careerApplications, type CareerApplication, type InsertCareerApplication, leadCaptures, type LeadCapture, type InsertLeadCapture } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createCareerApplication(application: InsertCareerApplication): Promise<CareerApplication>;
  createLeadCapture(leadCapture: InsertLeadCapture): Promise<LeadCapture>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private careerApplications: Map<number, CareerApplication>;
  private leadCaptures: Map<number, LeadCapture>;
  currentUserId: number;
  currentApplicationId: number;
  currentLeadCaptureId: number;

  constructor() {
    this.users = new Map();
    this.careerApplications = new Map();
    this.leadCaptures = new Map();
    this.currentUserId = 1;
    this.currentApplicationId = 1;
    this.currentLeadCaptureId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createCareerApplication(insertApplication: InsertCareerApplication): Promise<CareerApplication> {
    const id = this.currentApplicationId++;
    const application: CareerApplication = { 
      ...insertApplication, 
      id,
      submittedAt: new Date(),
      status: insertApplication.status || "pending",
      resumeFileName: insertApplication.resumeFileName || null
    };
    this.careerApplications.set(id, application);
    return application;
  }

  async createLeadCapture(insertLeadCapture: InsertLeadCapture): Promise<LeadCapture> {
    const id = this.currentLeadCaptureId++;
    const leadCapture: LeadCapture = {
      ...insertLeadCapture,
      id,
      submittedAt: new Date(),
      status: insertLeadCapture.status || "new",
      source: insertLeadCapture.source || "website_typeform",
      phone: insertLeadCapture.phone || null
    };
    this.leadCaptures.set(id, leadCapture);
    return leadCapture;
  }
}

export const storage = new MemStorage();
