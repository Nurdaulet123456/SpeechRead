import { useState } from "react";

const useResult = (note) => {
    const [count, setCount] = useState(0);
  
    const isNote = {
      word: note.split(" ").length <= 1 ? 0 : note.split(" ").length,
      page: note.split(" ").length > 100 ? setCount(count + 1) : count,
      race: ((note.split(" ").length / 60) * 100).toFixed(0) <= 2
      ? "0wpm"
      : `${((note.split(" ").length / 60) * 100).toFixed(0)}wpm`
    }

    return {
        w: isNote.word,
        p: isNote.page,
        r: isNote.race
    }
}

export default useResult;
