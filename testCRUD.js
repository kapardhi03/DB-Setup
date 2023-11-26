// testCRUD.js
const { User, Post } = require("./models"); // Correct model names
const user = require("./models/user");

// C - CREATE
async function createRecords() {
    const user = await User.create({ // Correct model name
        username: "Kaps",
        email: "kapardhikannekanti@gmail.com",
        display_name: "K.Kapardhi",
        bio: "All-Rounder"
    });

    await Post.create({ // Correct model name
        content: "HI",
        postedAt: new Date(),
        userId: user.id
    });
}

// R - RETRIEVE 
// async function fetchRecords() {
//     const users = await User.findAll();
//     console.log(JSON.stringify(users));

//     const posts = await Post.findAll();
//     console.log(JSON.stringify(posts));
// }


// U - UPDATE
// async function updateRecords() {
//     await User.update({ bio: "AllRounder" }, {
//         where: {
//             id: 1
//         }
//     })
// }



// D - DELETE
// async function deleteRecords() {
//     await User.destroy({
//         where: {
//             id: 1
//         }
//     })
// }



createRecords();

// fetchRecords();

// updateRecords();

// deleteRecords();