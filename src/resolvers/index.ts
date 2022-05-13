import categoryResolver from './category';
import categoriesResolver from './categories';
import currencyResolver from './currencies';
import productResolver from './product';
import getProducts from './getProducts';

const resolvers = {
  Query: {
    categories: categoriesResolver,
    category: categoryResolver,
    currencies: currencyResolver,
    product: productResolver,
    getProducts: getProducts,
  },
};

export default resolvers;
