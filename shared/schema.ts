import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const careerApplications = pgTable("career_applications", {
  id: serial("id").primaryKey(),
  careerPath: text("career_path").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  resumeFileName: text("resume_file_name"),
  randomQuestion: text("random_question").notNull(),
  randomAnswer: text("random_answer").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  status: text("status").default("pending").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCareerApplicationSchema = createInsertSchema(careerApplications).omit({
  id: true,
  submittedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCareerApplication = z.infer<typeof insertCareerApplicationSchema>;
export type CareerApplication = typeof careerApplications.$inferSelect;
