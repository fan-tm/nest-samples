import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { AppService } from './app.service';
import { User } from './entities';

type FixtureInput = {
  entityName: string;
  source?: string;
};

type LoadFixtureInput = string | FixtureInput;

const fixtures = () => [
  {
    entity: 'User',
    source: [
      {
        id: Number(
          Math.random()
            .toString()
            .substr(2, 8),
        ),
        name: 'name',
        male: 'man',
        status: '1',
      },
      {
        id: Number(
          Math.random()
            .toString()
            .substr(2, 8),
        ),
        name: 'name',
        male: 'man',
        status: '1',
      },
    ],
  },
  {
    entity: 'Role',
    source: [
      {
        id: Number(
          Math.random()
            .toString()
            .substr(2, 8),
        ),
        name: 'name',
        type: 'admin',
      },
      {
        id: Number(
          Math.random()
            .toString()
            .substr(2, 8),
        ),
        name: 'name',
        type: 'user',
      },
    ],
  },
];

@Controller()
export class AppController {
  private registeredEntities: string[];
  private repositories: { [name: string]: Repository<any> };
  constructor(
    private readonly appService: AppService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private connection: Connection,
  ) {
    this.registeredEntities = this.connection.entityMetadatas.map(x => x.name);
    this.repositories = this.registeredEntities.reduce(
      (map: { [x: string]: Repository<any> }, entity) => {
        Object.assign(map, { [entity]: this.connection.getRepository(entity) });
        return map;
      },
      {},
    );
  }

  async disableForeignCheck() {
    await this.connection.query('SET FOREIGN_KEY_CHECKS = 0;');
  }

  async enableForeignCheck() {
    await this.connection.query('SET FOREIGN_KEY_CHECKS = 1;');
  }

  async load(inputs?: LoadFixtureInput | LoadFixtureInput[]) {}

  async clear() {}

  @Get()
  getHello(): string {
    console.log('registeredEntities:', this.registeredEntities);
    console.log('repositories:', this.repositories);

    return this.appService.getHello();
  }

  @Get('/load')
  async loadFixtures(): Promise<any> {
    return Promise.all(
      fixtures().map(x => this.repositories[x.entity]?.insert(x.source as any)),
    );
  }

  @Get('/clear')
  async clearFixtures(): Promise<any> {
    return Promise.all(
      fixtures().map(x => this.repositories[x.entity]?.delete({})),
    );
  }
}
