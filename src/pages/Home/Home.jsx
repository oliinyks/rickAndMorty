import img from "../../rick.png";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Img } from "./Home.styled";

const Home = () => {
  return (
    <>
        <Img src={img} alt="rick and morty" />
      <SearchForm />
    </>
  );
};

export default Home;
