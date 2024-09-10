
import cartIcon from '../../assets/icon-cart.svg';

const AddToCartButton = () => {
  return (
    <button className="product-card__cta">
      <img src={cartIcon} alt="Cart" className="product-card__cta-icon" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
