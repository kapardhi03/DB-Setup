// // testCRUD.js
const { sequelize, Users, Post } = require("./models");


// async function createRecords() {

// // C - CREATE

// const newUser = await Users.create({
//     username: "Kapardhi.kannekanti",
//     email: "kapardhi@gmail.com",
//     display_name: "Kaps",
//     bio: "All-Rounder",
//     date_of_birth: new Date(),
// plus_verified: "",
// username: "Bochu",
// email: "chvngl@gmail.com",
// display_name: "Abbhinavv",
// bio: "Intern at saferTech",
// date_of_birth: new Date(),
// });
// ----------------------------------------------------------------------------------------------------------------------------
// const newPost = await Post.create({
//     posted_at: new Date(),
//     posted_by: 14,
//     repost_id: 1,
//     content: "I am glad to share that i got an internship at Safertech solutions",
// });
// ----------------------------------------------------------------------------------------------------------------------------





// }


// createRecords();

// ----------------------------------------------------------------------------------------------------------------------------

// R - RETRIEVE 

// async function fetchRecords() {
//     const users = await Users.findAll();
//     console.log(JSON.stringify(users));

//     const posts = await Post.findAll();
//     console.log(JSON.stringify(posts));
// }
// fetchRecords();


// -Output
// Executing (default): SELECT "id", "username", "email", "display_name", "bio", "date_of_birth", "plus_verified", "createdAt", "updatedAt" FROM "Users" AS "Users";
// [{"id":1,"username":"Kapardhi","email":"kapardhi@gmail.com","display_name":"Kaps","bio":"All-Rounder","date_of_birth":"2023-11-26T12:42:40.286Z","plus_verified":null,"createdAt":"2023-11-26T12:42:40.287Z","updatedAt":"2023-11-26T12:42:40.287Z"},{"id":7,"username":"Kapardhi.kannekanti","email":"kapardhi@gmail.com","display_name":"Kaps","bio":"All-Rounder","date_of_birth":"2023-11-26T12:45:40.267Z","plus_verified":null,"createdAt":"2023-11-26T12:45:40.268Z","updatedAt":"2023-11-26T12:45:40.268Z"},{"id":9,"username":"Aditya","email":"aditya@gmail.com","display_name":"KA","bio":"Coder","date_of_birth":"2023-11-26T12:46:19.221Z","plus_verified":null,"createdAt":"2023-11-26T12:46:19.222Z","updatedAt":"2023-11-26T12:46:19.222Z"},{"id":13,"username":"Abhinav","email":"chvngl@gmail.com","display_name":"bochu","bio":"Intern at SaferTech limited","date_of_birth":"2023-11-26T12:50:28.135Z","plus_verified":null,"createdAt":"2023-11-26T12:50:28.141Z","updatedAt":"2023-11-26T12:50:28.141Z"},{"id":14,"username":"Bochu","email":"chvngl@gmail.com","display_name":"Abbhinavv","bio":"Intern at saferTech","date_of_birth":"2023-11-26T12:58:09.365Z","plus_verified":null,"createdAt":"2023-11-26T12:58:09.366Z","updatedAt":"2023-11-26T12:58:09.366Z"}]
// Executing (default): SELECT "id", "posted_at", "posted_by", "content", "repost_id", "is_reply", "createdAt", "updatedAt" FROM "Posts" AS "Post";
// [{"id":4,"posted_at":"2023-11-26T13:10:20.405Z","posted_by":"14","content":"I am glad to share that i got an internship at Safertech solutions","repost_id":"1","is_reply":null,"createdAt":"2023-11-26T13:10:20.405Z","updatedAt":"2023-11-26T13:10:20.405Z"}]



// ----------------------------------------------------------------------------------------------------------------------------


// U - UPDATE
// async function updateRecords() {
//     await Users.update({ bio: "AllRounder" }, {
//         where: {
//             id: 2
//         }
//     })
// }

// updateRecords()

// // D - DELETE
// // async function deleteRecords() {
// //     await User.destroy({
// //         where: {
// //             id: 1
// //         }
// //     })
// // }



// createRecords();

// // // fetchRecords();

// // // updateRecords();

// // // deleteRecords();
// testCRUD.js
// const { DATEONLY } = require("sequelize");
// const { Users, Post, Follower, Like, Reply, Retweet, Hashtag, PostHashtag, Message } = require("./models");

// // C - CREATE
// async function createRecords() {
//     // Create a user
//     // const newUser = await Users.create({
//     //     username: "Abhinav",
//     //     email: "chvngl@gmail.com",
//     //     display_name: "bochu",
//     //     bio: "Intern at SaferTech limited",
//     //     date_of_birth: new Date(), // Use the correct date format
//     //     plus_verified: null // Assuming plus_verified can be null
//     // });

//     // Create a post for the user
//     await Post.create({
//         content: "I am glad to share that i got an internship at Safertech solutions",
//         posted_at: new Date(), // Use the correct attribute name
//         posted_by: 13
//     });

//     // Create a follower relationship
//     // await Follower.create({
//     //     follower_id: 13,
//     //     following_id: 2 // Replace with an actual user ID
//     // });

//     // // Create a like for the post
//     // await Like.create({
//     //     user_id: 2, // Replace with an actual user ID
//     //     post_id: 2,
//     //     timestamp: new Date()
//     // });

//     // // Create a reply to the post
//     // await Reply.create({
//     //     user_id: 2, // Replace with an actual user ID
//     //     post_id: 2,
//     //     reply_text: "Some reply",
//     //     timestamp: new Date()
//     // });

//     // // Create a retweet of the post
//     // await Retweet.create({
//     //     user_id: 2, // Replace with an actual user ID
//     //     post_id: 2,
//     //     retweet_comment: "Nice bro keep it up.",
//     //     timestamp: new Date()
//     // });

//     // // Create a hashtag
//     // const newHashtag = await Hashtag.create({
//     //     hashtag_text: "SomeHashtag",
//     //     created_at: new Date()
//     // });

//     // // Associate the hashtag with the post
//     // await PostHashtag.create({
//     //     post_id: 2,
//     //     hashtag_id: newHashtag.id
//     // });

//     // // Send a message from one user to another
//     // await Message.create({
//     //     sender_id: 13, // Replace with an actual user ID
//     //     receiver_id: 2, // Replace with an actual user ID
//     //     message_text: "Hello, world!",
//     //     timestamp: new Date()
//     // });
// }

// createRecords();