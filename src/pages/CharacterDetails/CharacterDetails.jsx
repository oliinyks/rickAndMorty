import { useState, useEffect } from "react";
import { useLocation, useParams, Outlet } from "react-router-dom";
import { fetchById } from "../../api";
import Loader from "components/Loader/Loader";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  StyledLinkBack,
  ButtonText,
  Img,
  MainTitle,
  SecondTitle,
  CategoryTitle,
  CategoryText,
  Box,
  InfoBox,
} from "./CharacterDetails.styled";

const CharacterDetails = () => {
  const [selectedCharecter, setSelectedCharecter] = useState(null);
  const [loader, setLoader] = useState(false);
  const { characterId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const charecter = await fetchById(characterId);
        setSelectedCharecter(charecter);
        setLoader(false);
      } catch (error) {
        new Error();
      }
    };
    fetchData();
  }, [characterId]);

  if (!selectedCharecter) {
    return;
  }

  return (
    <>
      <StyledLinkBack to={backLinkHref}>
        <AiOutlineArrowLeft />
        <ButtonText>Go back</ButtonText>
      </StyledLinkBack>

      <Box>
        <Img src={selectedCharecter.image} alt={selectedCharecter.name} />
        <MainTitle>{selectedCharecter.name}</MainTitle>
        <SecondTitle>Informations</SecondTitle>

        <InfoBox>
          <CategoryTitle>Gender</CategoryTitle>
          <CategoryText>{selectedCharecter.gender}</CategoryText>
          <CategoryTitle>Status</CategoryTitle>
          <CategoryText>{selectedCharecter.status}</CategoryText>
          <CategoryTitle>Specie</CategoryTitle>
          <CategoryText>{selectedCharecter.species}</CategoryText>
          <CategoryTitle>Origin</CategoryTitle>
          <CategoryText>{selectedCharecter.origin.name}</CategoryText>
          <CategoryTitle>Type</CategoryTitle>
          <CategoryText>
            {selectedCharecter.type ? selectedCharecter.type : "Undefined"}
          </CategoryText>
        </InfoBox>
      </Box>

      {loader && <Loader />}
      <Outlet />
    </>
  );
};

export default CharacterDetails;
