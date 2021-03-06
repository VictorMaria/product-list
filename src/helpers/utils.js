import crypto from 'crypto';
import { productNames, manufacturers, models } from './products';

const generateId = (size) => {
    const refinedSize = parseInt(size);
    return `${crypto.randomBytes(refinedSize).toString('hex')}`;
  };

const generateRandomNumber = (highestPossibleValue) => {
    return Math.floor(Math.random() * highestPossibleValue);
}

export const generateRandomProducts = (numberOfProducts) => {
    const products = [];
    for (let index = 0; index < numberOfProducts; index++) {
        const model = models[generateRandomNumber(models.length)];
        products.push(
            {
                sku: `${model}${generateId(6)}`,
                product_name: productNames[generateRandomNumber(productNames.length)],
                manufacturer: manufacturers[generateRandomNumber(manufacturers.length)],
                active: generateRandomNumber(2) === 0 ? false : true,
            }
        );
    }
    return products;
};
