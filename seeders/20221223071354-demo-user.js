'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/

    //Seeder User
  await queryInterface.bulkInsert('user', [{
        id:1,
        name: 'John Doe',
        email: 'john@gmail.com',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        id:2,
        name: 'akihiro',
        email: 'akihiro@gmail.com',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        id:3,
        name: 'zero',
        email: 'zero@gmail.com',
        createdAt:new Date(),
        updatedAt:new Date(),
      }
  ], {});

    //Seeder Channel
    await queryInterface.bulkInsert('channel', [{
      id:1,
      name: 'akihiro-kun',
      user_id:2,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
    {
      id:2,
      name: 'zero gaminx',
      user_id:3,
      createdAt:new Date(),
      updatedAt:new Date(),
    },
  ], {});

  //Seeder Vidio
  await queryInterface.bulkInsert('video', [{
    id:1,
    title: 'Tutorial node js',
    channel_id:1,
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    id:2,
    title: 'Tutorial laravel',
    channel_id:1,
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  {
    id:3,
    title: 'tutorial jumpshoot valorant booyah',
    channel_id:2,
    createdAt:new Date(),
    updatedAt:new Date(),
  },
  ], {});

  },



  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
