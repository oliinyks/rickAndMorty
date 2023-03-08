import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container } from "./SharedLayout.styled";
import { GlobalStyle } from "constants/GlobalStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
        <GlobalStyle />
      </Container>
      <ToastContainer autoClose={3000} />
    </>
  );
};
