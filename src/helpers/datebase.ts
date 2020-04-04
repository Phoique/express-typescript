import 'reflect-metadata';
import { createConnection } from 'typeorm';
import User from '../entity/User';

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

    try {
      const userRepo = connection.getRepository(User);
      await userRepo.save(userAdmin);
      await userRepo.save(user);

    } catch (error) {
      console.log('there is already a user.');
    }

    return connection;
  });
} catch (error) {
  console.log(error);
}