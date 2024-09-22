const ProductCard = ({ product }) => {
    // Limit description to 100 characters
    const shortDescription = product.description.length > 100
      ? product.description.slice(0, 100) + '...'
      : product.description;
  
    return (
      <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{shortDescription}</p>
      </div>
    );
  };
  
  export default ProductCard;
  