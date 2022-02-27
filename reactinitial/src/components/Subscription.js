import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import { FormGroup } from "@mui/material";
import Loading from "./Loading";
const axios = require("axios");

const Subscription = () => {
  const [emailInput, setEmailInput] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [display, setDisplay] = useState(true);
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const sendSubscription = async () => {
    setLoading(true);
    try {
      await axios.post("https://seriescharacters.com/api/newsletter", {
        email: emailInput,
      });
      setLoading(false);
      setSubscribed(true);
      setTimeout(() => {
        setDisplay(false);
      }, 5000);
    } catch {}
  };

  const validation = (value) => {
    setEmailInput(value);
    let dot = false;
    let at = false;
    for (let i of value) {
      i === "." && (dot = true);
      i === "@" && (at = true);
    }
    if (dot && at) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  return (
    <div>
      {display ? (
        subscribed ? (
          <div>Subscribed!</div>
        ) : loading ? (
          <Loading />
        ) : (
          <FormGroup>
            <Input onChange={(e) => validation(e.target.value)}>
              Subscribe to our newsletter
            </Input>
            <Button
              disabled={!validEmail}
              variant="contained"
              onClick={sendSubscription}
            >
              Subscribe
            </Button>
          </FormGroup>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Subscription;