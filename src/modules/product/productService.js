import { generateRandomProducts } from '../../helpers/utils';
import { productDefinition } from './productDefinition';

export const fetchMany = (numberOfProducts) => {
    const products = generateRandomProducts(numberOfProducts);
    const response = {
        meta: {
            count: products.length,
            productDefinition
        },
        items: products,
    };

    return response;
};
