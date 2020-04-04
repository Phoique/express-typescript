import 'reflect-metadata';
import { createConnection } from 'typeorm';
import User from '../entity/User';
import Role from '../entity/Role';

try {
  createConnection().then(async connection => {

    // New admin user
    const userAdmin = new User();
    userAdmin.username = 'admin';
    userAdmin.password = 'pass';
    userAdmin.role = 1;

    // new user
    const user = new User();
    user.username = 'user';
    user.password = 'pass';
    user.role = 2;

    // add admin role
    const roleAdmin = new Role();
    roleAdmin.name = 'admin';

    // add user role
    const roleUser = new Role();
    roleUser.name = 'user';

    try {
      const userRepo = connection.getRepository(User);
      await userRepo.save(userAdmin);
      await userRepo.save(user);

    } catch (error) {
      console.log('there is already users.');
    }

    try {
      const roleRepo = connection.getRepository(Role);
      await roleRepo.save(roleAdmin);
      await roleRepo.save(roleUser);

    } catch (error) {
      console.log('there is already roles.');
    }

    return connection;
  });
} catch (error) {
  console.log(error);
}