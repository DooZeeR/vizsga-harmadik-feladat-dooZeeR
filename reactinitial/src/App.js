import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Character from "./components/Character";
import Subscription from "./components/Subscription";
const axios = require("axios");

const App = () => {
  const [myList, updateList] = useState("");
  const [loading, setLoading] = useState(true);
  const [showSubscribe, setshowSubscribe] = useState(false);

  const renderData = async () => {
    let resp = await axios.get(
      "https://seriescharacters.com/api/howimetyourmother"
    );
    updateList(resp.data);
    setLoading(false);
    setTimeout(() => {
      setshowSubscribe(true);
    }, 10000);
  };

  useEffect(() => {
    renderData();
  }, []);

  return (
    <div>
      <h1>Series Api</h1>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {myList.map((list, i) => (
            <Character key={i} char={list} />
          ))}
        </div>
      )}
      {showSubscribe && <Subscription />}
    </div>
  );
};

export default App;
