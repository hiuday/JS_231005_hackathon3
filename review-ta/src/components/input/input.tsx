import "./input.css";
import { IoMdSearch } from "react-icons/io";
const Search: React.FC = () => {
  return (
    <section>
      <div className="search">
        <span className="icon">
          <IoMdSearch />
        </span>
        <input className="search-name" type="text" placeholder="tìm kiếm" />
      </div>
    </section>
  );
};
export default Search;
