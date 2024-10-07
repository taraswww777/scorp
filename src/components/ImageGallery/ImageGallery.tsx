"use client"
import { FC, useState } from 'react';

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
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden">
        <img src={images[currentImageIndex].fullImage} alt="" />
      </div>
      <button onClick={goBackImage}>back</button>
      <button onClick={goNextImage}>next</button>
    </div>
  )
}
