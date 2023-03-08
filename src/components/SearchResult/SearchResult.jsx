import { useLocation, Outlet} from "react-router-dom";
import {
  Box,
  Items,
  Item,
  Img,
  Title,
  Text,
  StyledLink,
} from "./SearchResult.styled";

const SearchResult = ({ name }) => {
	const location = useLocation();
	
  return (
    <Items>
      {name.map(({ id, name, status, image }) => (
        <Item key={id}>
          <StyledLink to={`/${id}`} state={{ from: location }}>
            <Img src={image} alt={name} />
            <Box>
              <Title>{name}</Title>
              <Text>{status}</Text>
            </Box>
          </StyledLink>
        </Item>
      ))}
      <Outlet />
    </Items>
  );
};

export default SearchResult;
