import { Input } from "@mui/material";

import tracksList from "../../assets/tracksList";
import Track from "../../components/Track/Track";
import style from "./mainPage.module.scss";
import { useState } from "react";

const runSearch = (query) => {
  if (!query) {
    return tracksList;
  }

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    (track) =>
      track.title.toLocaleLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLocaleLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (e) => {
    const foundTracks = runSearch(e.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Track search"
        onChange={handleChange}
      />
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
