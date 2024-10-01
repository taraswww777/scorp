/** DTO элемента в каталоге моделей */
export interface CatalogModelItemDTO {
  uuid: string;
  name: string;
  likes: number,
  previewImgUrl: string;
  author: {
    previewImgUrl: string;
    nikName: string
  },
  comments: string[],
  images: Array<{ fullImage: string, preview: string }>
}
