import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

type FixtureInput = {
  entityName: string;
  source?: string;
};

type LoadFixtureInput = string | FixtureInput;

type Fixture = { entityName: string } & {
  [x: string]: any[];
};

@Injectable()
export class FixtureService {
  private fixtures: { [x: string]: any }[];
  private repositories: { [name: string]: Repository<any> };
  constructor(private connection: Connection) {
    const registeredEntities = this.connection.entityMetadatas.map(x => x.name);
    this.repositories = registeredEntities.reduce(
      (map: { [x: string]: Repository<any> }, entityName) => {
        Object.assign(map, {
          [entityName]: this.connection.getRepository(entityName),
        });
        return map;
      },
      {},
    );
  }

  forRoot(fixtures) {}

  async disableForeignCheck() {
    await this.connection.query('SET FOREIGN_KEY_CHECKS = 0;');
  }

  async enableForeignCheck() {
    await this.connection.query('SET FOREIGN_KEY_CHECKS = 1;');
  }

  async load(inputs?: LoadFixtureInput | LoadFixtureInput[]) {}

  async clear() {}
}
