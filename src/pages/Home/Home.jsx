import img from "../../rick.png";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Img, Btn } from "./Home.styled";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(false);

  const login = useGoogleLogin({
    onSuccess: () => {
      setUser(true);
    },
  });

  const logout = () => {
    googleLogout();
    setUser(false);
  };

  return (
    <>
      {user ? (
        <Btn onSubmit={() => logout()}>Logout</Btn>
      ) : (
        <Btn onClick={() => login()}>Sign in with Google</Btn>
      )}

      <Img src={img} alt="rick and morty" />
      <SearchForm />
    </>
  );
};

export default Home;
