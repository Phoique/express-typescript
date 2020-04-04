import {MigrationInterface, QueryRunner} from "typeorm";

export class User1586033983412 implements MigrationInterface {
    name = 'User1586033983412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` text NOT NULL, UNIQUE INDEX `IDX_ae4578dcaed5adff96595e6166` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `role` int NOT NULL, `username` text NOT NULL, `password` text NOT NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
        await queryRunner.query("DROP INDEX `IDX_ae4578dcaed5adff96595e6166` ON `role`", undefined);
        await queryRunner.query("DROP TABLE `role`", undefined);
    }

}
