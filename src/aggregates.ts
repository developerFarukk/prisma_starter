

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {

    // find average age
    // const aggregations = await prisma.user.aggregate({
    //     _avg: {
    //       age: true,
    //     },
    //   })
      
    //   console.log('Average age:' + aggregations._avg.age)
    

    // find sum of age
    // const sumAge = await prisma.post.aggregate({
    //     _sum: {
    //         authorId: true
    //     }
    // });

    // console.log(sumAge._sum.authorId);
    

    // find count of age fields
    // const countAge = await prisma.post.aggregate({
    //     _count: {
    //         title: true
    //     },
    //     where: {
    //         published: true
    //     }
    // });

    // console.log(countAge);
    

    // find number of records
    // const countData = await prisma.user.count()

    // console.log(countData);
    

    // find max age
    // const maxAge = await prisma.post.aggregate({
    //     _max: {
    //         authorId: true
    //     }
    // });

    // console.log(maxAge);
    

    // find min age
    const minAge = await prisma.post.aggregate({
        _min: {
            authorId: true
        }
    });

    console.log(minAge);
};

aggregates();