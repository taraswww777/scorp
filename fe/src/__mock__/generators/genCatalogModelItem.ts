import { CatalogModelItemDTO } from 'src/types/dto/CatalogModelItemDTO';
import { faker } from '@faker-js/faker';
import { genComments } from './genComments';

const fakeNumber = () => faker.number.int({ min: 0, max: 1000 });

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
    folders: fakeNumber(),
    likes: fakeNumber(),
    name: faker.lorem.sentence({ max: 10, min: 1 }),
    images: [
      {
        fullImage: '/assets/mockImages/bigSlider/bigImage.png',
        preview: '/assets/mockImages/bigSlider/previews/image-0.png'
      },
      {
        fullImage: '/assets/mockImages/bigSlider/bigImage.png',
        preview: '/assets/mockImages/bigSlider/previews/image-1.png'
      },
      {
        fullImage: '/assets/mockImages/bigSlider/bigImage.png',
        preview: '/assets/mockImages/bigSlider/previews/image-2.png'
      },
      {
        fullImage: '/assets/mockImages/bigSlider/bigImage.png',
        preview: '/assets/mockImages/bigSlider/previews/image-3.png'
      },
      {
        fullImage: '/assets/mockImages/bigSlider/bigImage.png',
        preview: '/assets/mockImages/bigSlider/previews/image-4.png'
      },
      {
        fullImage: '/assets/mockImages/bigSlider/bigImage.png',
        preview: '/assets/mockImages/bigSlider/previews/image-5.png'
      },
    ]
  }
}
