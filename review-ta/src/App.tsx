import React, { useState, useContext } from "react";
import "./App.css";
import Header from "./components/header/header";
import Search from "./components/input/input";
import Content from "./components/body/body";
import MyContext from "./components/contextAPI/myContext";

export interface Review {
  id: number;
  content: string;
}
function App() {
  const [review, setReview] = useState<Review[]>([]);
  const addReview = (review: Review): void => {
    setReview((prev: Review[]) => [...prev, review]);
  };
  const deleteReview = (id: number): void => {
    const newReview = review.filter((item) => item.id != id);
    setReview(newReview);
  };
  const theme = useContext(MyContext);
  return (
    <div
      className="App"
      style={
        theme == "dark"
          ? {
              width: "100vw",
              height: "100vh",
              backgroundColor: "black",
              color: "white",
            }
          : {
              width: "100vw",
              height: "100vh",
              backgroundColor: "white",
              color: "black",
            }
      }
    >
      <Header />
      <Search />
     <Content review={review} addReview={addReview} deleteReview={deleteReview} />
    </div>
  );
}

export default App;
