import SearchBar from "./SearchBar";
import WordInformation from "./WordInformation";
import useFetchData from "./useFetchData";
import "./style.css";
import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

function Loader() {
  return (
    <div className="loader-container">
      <CgSpinner className="loader-icon" />
    </div>
  );
}

function Dictionary() {
  const { loading, error, data, execute } = useFetchData();

  async function onSearch(wordToSearch) {
    const endPoint = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    execute(`${endPoint}${wordToSearch}`);
  }

  useEffect(() => {
    if (error) console.log(error);
    // if (data) console.log(data);
  });

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <div className="result-container">
        {loading && <Loader />}
        {data && <WordInformation data={data} word={data[0].word} />}
        {error && <p>No word found or the spelling might be incorrect.</p>}
        {!(data || error || loading) && (
          <div className="greeting">
            Unlock the meaning of words with my easy-to-use online dictionary.
            <br />
            -devken-
          </div>
        )}
      </div>
    </>
  );
}

export default Dictionary;
