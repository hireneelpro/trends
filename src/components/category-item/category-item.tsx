// import "./category-item.scss";
import { Link } from "react-router-dom";
import { Category } from "../categories/categories";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { title, imageUrl } = category;

  return (
    <Link to={`/shop/${title}`} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop now</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
{
  /* <div onClick={showCategoryItems} className="category-container">
  <div
    className="background-image"
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  />
  <div className="category-body-container">
    <h2>{title}</h2>
    <p>shop now</p>
  </div>
</div>; */
}
