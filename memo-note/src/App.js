import Topbar from "./components/topbar/Topbar";
import Note from "./components/note/Note";
import {useState,useEffect} from "react";

function App() {
  const [title,setTitle] = useState('');
  return (
    <>
      <Topbar
        searchTitle={setTitle}
      />
      <Note title={title}/>
    </>
  );
}

export default App;
