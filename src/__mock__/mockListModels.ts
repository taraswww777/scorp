import { CatalogModelItemDTO } from 'src/types/dto/CatalogModelItemDTO';
import { genCatalogModelItem } from './generators/genCatalogModelItem';

const mockListModels = new Map<string, CatalogModelItemDTO>();

const maxSize = 25;

if (mockListModels.size < maxSize) {
  for (let i = 0; i < maxSize; i++) {
    const item = genCatalogModelItem();
    mockListModels.set(item.uuid, item);
  }
}

export { mockListModels };
