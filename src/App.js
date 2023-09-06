import "./styles.css";
import { useState } from "react";
export default function App() {
  const [ans, setAns] = useState("");
  async function HandleSubmit(event) {
    event.preventDefault();
    console.log("here");
    var url = document.getElementById("url-input").value;

    if (url != "") {
      var final = "";
      console.log(typeof url);
      await fetch("https://gotiny.cc/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: url })
      })
        .then((res) => {
          // console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log(res[0].code);
          final = `gotiny.cc/${res[0].code}`;
        })
        .catch((error) => console.log(error));

      setAns(final);
      // return final;
    }
  }
  return (
    <div className="App">
      <p>Shorten URLS fast n' easy</p>
      <form className="url-form" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="https://longURL.com"
          id="url-input"
        ></input>
        <input type="submit"></input>
      </form>
      <p>
        <a link={ans}>{ans}</a>
      </p>
    </div>
  );
}
