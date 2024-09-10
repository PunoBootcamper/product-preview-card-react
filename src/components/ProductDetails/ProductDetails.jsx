
import ProductCategory from './ProductCategory';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductDetails = () => {
  return (
    <div className="product-card__details">
      <ProductCategory />
      <ProductName />
      <ProductDescription />
      <ProductPrice />
      <AddToCartButton />
    </div>
  );
};

export default ProductDetails;
