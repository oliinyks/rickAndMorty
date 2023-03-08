import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { fetchByName, fetchAllCharacter } from "../../api";
import SearchResult from "../SearchResult/SearchResult";
import { AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";
import { Form, Input, Button } from "./SearchForm.styled";

const SearchForm = () => {
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllCharacter();
      const resultData = data.results;
      const sortData = resultData.sort((a, b) => a.name.localeCompare(b.name));
      setSearchResult(sortData);
	 };

    fetchData();
  }, []);

  const handleNameChange = (e) => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchName.trim() === "") {
      return toast.info("Please select a name");
    }
    setLoader(true);
    fetchCharacter();
    setLoader(false);
  };

  const fetchCharacter = async () => {
    try {
      const character = await fetchByName(searchName);
      if (!character) {
        return toast.error("We did not find the character you requested");
      }
      const resultCharacter = character.results;
      const sortCharacter = resultCharacter.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSearchResult(sortCharacter);
    } catch (error) {
      new Error();
    }
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
        <Button type="submit" className="button">
          <AiOutlineSearch size="18px" color="rgba(0, 0, 0, 0.5)" />
        </Button>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Filter by name..."
          value={searchName}
          onChange={handleNameChange}
        />
      </Form>

      {loader && <Loader />}
      {searchResult.length > 0 && <SearchResult name={searchResult} />}
    </>
  );
};

export default SearchForm;
