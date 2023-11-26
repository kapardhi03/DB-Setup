# DB-Setup
 
## DB-Schema

1. Users Table
	•	Columns:
	    •	id (BIGINT, PK)
	    •	username (VARCHAR(255))
	    •	created_at (TIMESTAMP)
	    •	email (VARCHAR(255))
	    •	bio (TEXT)
	    •	date_of_birth (DATE)
	    •	display_name (VARCHAR(50))
	    •	plus_verified (TIMESTAMP, nullable)
2. Auth Table
	•	Columns:
	    •	id (BIGINT serial, PK)
	    •	user_id (BIGINT, FK to Users.id, Unique)
	    •	password (VARCHAR(255), hashed format)
3. Posts Table
	•	Columns:
	    •	id (BIGINT, PK)
	    •	posted_at (TIMESTAMP)
	    •	posted_by (BIGINT, FK to Users.id)
	    •	content (TEXT)
	    •	repost_id (BIGINT, FK to Posts.id, nullable)
	    •	is_reply (BOOLEAN, default false)
	    •	Constraints:
	    •	content_not_null_if_not_rt CHECK ((repost_id IS NOT NULL) OR (content IS NOT NULL))
4. Followers Table
	•	Columns:
	    •	follower_id (BIGINT, FK to Users.id)
	    •	following_id (BIGINT, FK to Users.id)
	    •	timestamp (TIMESTAMP, default current timestamp)
	    •	Constraints:
	    •	no_self_following CHECK (follower_id <> following_id)
	    •	follow_relationship UNIQUE (follower_id, following_id)
5. Likes Table
	•	Columns:
	    •	user_id (BIGINT, FK to Users.id)
	    •	post_id (BIGINT, FK to Posts.id)
	    •	timestamp (TIMESTAMP, default current timestamp)
	•	Constraints:
	    •	like_relationship UNIQUE (user_id, post_id)
6. Replies Table
	•	Columns:
	    •	reply_id (BIGINT, PK)
	    •	user_id (BIGINT, FK to Users.id)
	    •	post_id (BIGINT, FK to Posts.id)
	    •	reply_text (TEXT)
	    •	timestamp (TIMESTAMP, default current timestamp)
7. Retweets Table
	•	Columns:
	    •	retweet_id (BIGINT, PK)
	    •	user_id (BIGINT, FK to Users.id)
	    •	post_id (BIGINT, FK to Posts.id)
	    •	retweet_comment (TEXT, nullable)
	    •	timestamp (TIMESTAMP, default current timestamp)
	•	Constraints:
	    •	retweet_relationship UNIQUE (user_id, post_id)
8. Hashtags Table
	•	Columns:
	    •	hashtag_id (BIGINT, PK)
	    •	hashtag_text (VARCHAR(255))
	    •	created_at (TIMESTAMP)
	•	Description:
	    •	Stores hashtags and their creation dates.
9. PostHashtags Table
	•	Columns:
	    •	post_id (BIGINT, FK to Posts.id)
	    •	hashtag_id (BIGINT, FK to Hashtags.hashtag_id)
	•	Constraints:
	    •	post_hashtag_relationship UNIQUE (post_id, hashtag_id)
10. Messages Table
	•	Columns:
	    •	message_id (BIGINT, PK)
	    •	sender_id (BIGINT, FK to Users.id)
	    •	receiver_id (BIGINT, FK to Users.id)
	    •	message_text (TEXT)
	    •	timestamp (TIMESTAMP, default current timestamp)
	•	Constraints:
	    •	sender_receiver_pair UNIQUE (sender_id, receiver_id)