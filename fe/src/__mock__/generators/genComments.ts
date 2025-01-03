import { faker } from '@faker-js/faker';

export const genComments = ({
  maxCountItems = 10,
  minCountItems = 0,
  maxLengthComment = 100,
  minLengthComment = 1,
} = {}) => {
  // Случайный размер от 1 до 10
  const randomSize = faker.number.int({ max: maxCountItems, min: minCountItems });

  return Array.from({ length: randomSize }, () => {
    // Случайная длина предложения от 1 до 10
    const sentenceLength = faker.number.int({ max: maxLengthComment, min: minLengthComment });

    return faker.lorem.sentence(sentenceLength);
  });
}
