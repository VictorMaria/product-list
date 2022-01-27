import * as productService from './productService';

export const fetchMany = (req, res) => {
    try {
        const { numberOfProducts } = req.body;
    if (numberOfProducts && !numberOfProducts.match(/^[0-9]+$/)) {
        return res.status(400).json({ message: 'Number of products should be 1 or higher' });
    }
        const refinedNumberOfProducts = numberOfProducts ? parseInt(numberOfProducts) : 10;
        const products = productService.fetchMany(refinedNumberOfProducts);
        res.status(200).json(
            {
                message: 'Products fetched successfully',
                products,
            }
        )
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
};
