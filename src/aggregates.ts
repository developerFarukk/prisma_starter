

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {

    // find average age
    const aggregations = await prisma.user.aggregate({
        _avg: {
          age: true,
        },
      })
      
      console.log('Average age:' + aggregations._avg.age)
    

    // find sum of age
    // const sumAge = await prisma.user.aggregate({
    //     _sum: {
    //         age: true
    //     }
    // });

    // find count of age fields
    // const countAge = await prisma.post.aggregate({
    //     _count: {
    //         title: true
    //     },
    //     where: {
    //         published: true
    //     }
    // });

    // find number of records
    // const countData = await prisma.user.count()

    // find max age
    // const maxAge = await prisma.user.aggregate({
    //     _max: {
    //         age: true
    //     }
    // });

    // find min age
    // const minAge = await prisma.user.aggregate({
    //     _min: {
    //         age: true
    //     }
    // });

    // console.log(countAge);
};

aggregates();