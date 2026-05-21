PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_pinned_posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`post_id` integer NOT NULL,
	`title` text NOT NULL,
	FOREIGN KEY (`post_id`) REFERENCES `posts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_pinned_posts`("id", "post_id", "title") SELECT "id", "post_id", "title" FROM `pinned_posts`;--> statement-breakpoint
DROP TABLE `pinned_posts`;--> statement-breakpoint
ALTER TABLE `__new_pinned_posts` RENAME TO `pinned_posts`;--> statement-breakpoint
PRAGMA foreign_keys=ON;