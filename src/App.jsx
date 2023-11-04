import Appbar from "./components/Appbar";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import Questions from "./components/Questions";
import { useFetch } from "./hooks/useFetch";

function App() {
  useEffect(() => {
    alanBtn({
      key: "ae693fe183ec8d2b2fe9339325f597212e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);

  const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_APP_BASE_URL
  );
  const [show, setShow] = useState(
    localStorage.getItem("show") == "false"
      ? false
      : localStorage.getItem("show") == "true"
      ? true
      : localStorage.getItem("show") || false
  );
  localStorage.setItem("show", show);
  useEffect(() => {
    localStorage.setItem("show", show);
  }, [show]);
  return (
    <>
      <Appbar />
      <div className="w-2/4 mx-auto mt-5">
        {show && isLoading && <>loading...</>}
        {show && data?.map(({ question, answer, id }) => {
            return <Questions key={id} question={question} answer={answer} />;
          }
        )}
      </div>
      {error && <h3 className="text-center font-bold py-5">{error}</h3>}
      <div className="w-[75%]">
        <button
          onClick={() => {
            setShow((old) => !old);
          }}
          className="bg-red-500 mt-16 py-2 px-4 capitalize text-white rounded-full float-right"
        >
          {!show ? "show questions" : "don't show questions"}
        </button>
      </div>
    </>
  );
}

export default App;
