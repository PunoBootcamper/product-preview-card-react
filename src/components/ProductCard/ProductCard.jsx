
import ProductImage from '../ProductImage/ProductImage';
import ProductDetails from '../ProductDetails/ProductDetails';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductCard = () => {
  return (
    <div className="product-card">
      <ProductImage />
      <ProductDetails />
      <AddToCartButton />
    </div>
  );
};

export default ProductCard;
