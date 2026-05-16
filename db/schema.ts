import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull(),
  bio: text("bio"),
  avatar: text("avatar"),
  isAdmin: integer("is_admin", { mode: "boolean" }).default(false),
});

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => profiles.id).notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  snippet: text("snippet"),
  link: text("link"),
  tags: text("tags"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  likes: integer("likes").default(0),
});

export const tags = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const postTags = sqliteTable("post_tags", {
  postId: integer("post_id").references(() => posts.id).notNull(),
  tagId: integer("tag_id").references(() => tags.id).notNull(),
});