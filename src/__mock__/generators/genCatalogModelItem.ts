import { CatalogModelItemDTO } from 'src/types/dto/CatalogModelItemDTO';
import { faker } from '@faker-js/faker';
import { genComments } from './genComments';

export const genCatalogModelItem = (): CatalogModelItemDTO => {
  return {
    uuid: faker.string.uuid(),
    author: { nikName: faker.internet.userName(), previewImgUrl: '/assets/mockImages/userDefault.png' },
    comments: genComments(),
    previewImgUrl: faker.string.fromCharacters([
      '/assets/mockImages/models/model-1.png',
      '/assets/mockImages/models/model-2.png',
      '/assets/mockImages/models/model-3.png',
      '/assets/mockImages/models/model-4.png',
    ]),
    likes: faker.number.int({ min: 0 }),
    name: faker.lorem.sentence({ max: 10, min: 1 }),
  }
}
