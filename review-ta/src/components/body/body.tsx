import { useState } from "react";
import "./body.css";
import { FaTrashAlt } from "react-icons/fa";
import { Review } from "../../App";

interface Props {
  review: Review[];
  addReview: Function;
  deleteReview: Function;
}
const Content: React.FC<Props> = (props: Props) => {
  const [content, setContent] = useState<string>("");
  const handleAddReview = (): void => {
    const newReview: Review = {
      id: Math.random() * 10000000000,
      content: content,
    };
    props.addReview(newReview);
    setContent("");
  };

  return (
    <section>
      <div className="container">
        <ul>
          <li className="review-content">
            <p className="form-content"></p>
            <input
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
              className="content"
              type="text"
              placeholder="type here"
            />
            <p className="date">199</p>
            <button onClick={handleAddReview} className="btn-pushlish">
              pushlish
            </button>
            <span className="delete">
              <FaTrashAlt />
            </span>
          </li>
          {props.review.map((item, index) => {
            return (
              <li className="review-content" key={item.id}>
                <p className="form-content">{item.content}</p>
                <input
                  value={content}
                  className="content"
                  type="text"
                  placeholder="type here"
                />
                <p className="date">199</p>
                <button onClick={handleAddReview} className="btn-pushlish">
                  pushlish
                </button>
                <span className="delete">
                  <FaTrashAlt onClick={() => props.deleteReview(item.id)} />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Content;
