
import productImage from '../../assets/image-product-mobile.jpg';

const ProductImage = () => {
  return (
    <div className="product-card__image">
      <img src={productImage} alt="Product" />
    </div>
  );
};

export default ProductImage;
