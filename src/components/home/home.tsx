import React from "react";
import "./home.scss";
interface HomeProps {
  // Define your props here, for example:
  // title: string;
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="home-component">
      <p>Home Page</p>
      {/* Example usage of a prop: {props.title} */}
    </div>
  );
};

export default Home;
