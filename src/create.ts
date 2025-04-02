

import { PrismaClient, UserRole, } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // create User
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user1",
    //         email: "user1@ph.com",
    //         role: UserRole.user
    //     }
    // });

    // console.log(createUser);


    // create profile
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio...",
    //         userId: 1
    //     }
    // })

    // console.log(createProfile);


    // Create Category
    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "software engineering 6"
    //     }
    // })

    // console.log(createCategory);

    // Create post
    const createPost = await prisma.post.create({
        // data: {
        //     title: "this is title 5",
        //         content: "this is content of the post. 5",
        //             authorId: 3,
        //                 postCategory: {
        //         create: [
        //             {
        //                 categoryId: 1
        //             },
        //             {
        //                 categoryId: 3
        //             },
        //             {
        //                 categoryId: 4
        //             }
        //         ]
        //     }
        // },

        data: {
            title: "this is title 5",
            content: "this is content of this post 5",
            authorId: 3,
            // postCategory: {
            //     create: {
            //         // categoryId: 3
            //         category: {
            //             connect: {
            //                 id: 1
            //             }
            //         }
            //     }
            // }

            postCategory: {
                create: [
                    {
                        categoryId: 2
                    },
                    {
                        categoryId: 3
                    },
                    {
                        categoryId: 4
                    },
                ]
            }
        },

        include: {
            postCategory: true
        }
    })
    console.log(createPost)


    // Create many
    // const createPost = await prisma.post.createMany({
    //     data: [
    //         {
    //             title: "title 1",
    //             content: "contant 1",
    //             authorName: "author name 1",
    //             author: "author 1"
    //         },
    //         {
    //             title: "title 2",
    //             content: "contant 2",
    //             authorName: "author name 2",
    //             author: "author 2"
    //         },
    //         {
    //             title: "title 3",
    //             content: "contant 3",
    //             authorName: "author name 3",
    //             author: "author 3"
    //         }
    //     ]
    // })

}

main();