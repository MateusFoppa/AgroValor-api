import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabaseAgrovalor1698406991085
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE DATABASE agrovalor');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP DATABASE agrovalor');
  }
}
