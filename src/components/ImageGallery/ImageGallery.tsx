"use client"
import { FC, useState } from 'react';
import { Button } from 'src/uiKit';

interface ImageGalleryProps {
  images: Array<{
    /** Пусть к полноразмерной картинке */
    fullImage: string,
    /** Пусть к маленькой картинке */
    preview: string
  }>
  /** Интекс картинки отображаемой по умолчанию */
  initImageIndex?: number
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images, initImageIndex = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(initImageIndex);

  const goNextImage = () => {
    const nextIndex = currentImageIndex + 1;
    if (nextIndex >= images.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(nextIndex);
    }
  }

  const goBackImage = () => {
    const nextIndex = currentImageIndex - 1;
    if (nextIndex < 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(nextIndex);
    }
  }

  return (
    <div className="w-full relative max-h-[750px]">
      <div className="rounded-2xl overflow-hidden">
        <img src={images[currentImageIndex].fullImage} alt="" />
      </div>
      <Button className="absolute top-0 left-0 h-full opacity-50 hover:opacity-100" onClick={goBackImage}>back</Button>
      <Button className="absolute bottom-0 right-0 h-full opacity-50 hover:opacity-100" onClick={goNextImage}>next</Button>
    </div>
  )
}
