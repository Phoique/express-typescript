import 'reflect-metadata';
import { createConnection } from 'typeorm';

try {
  createConnection().then(() => console.log('başarılı'));
} catch (error) {
  console.log(error);
}