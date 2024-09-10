
import ProductCategory from './ProductCategory';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';

const ProductDetails = () => {
  return (
    <div className="product-card__details">
      <ProductCategory />
      <ProductName />
      <ProductDescription />
      <ProductPrice />
    </div>
  );
};

export default ProductDetails;
