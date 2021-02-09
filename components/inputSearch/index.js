import { TextField, Button } from "@material-ui/core";
import react, { useCallback, useState } from "react";
import fetch from 'isomorphic-fetch';

const InputSearch = ({props}) => {
  const [movie, setMovie] = useState("")
  const [result, setResult] = useState([])

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setMovie(query);
    console.log("query",query)
    if (event.keyCode === 13) {
      fetch(`http://www.omdbapi.com/?t=${query}&apikey=aa9e23c2`)
      .then(res => res.json())
      .then(res => {
        setResult(res)
      })
    }
  },[])

  return (
    <>
      <TextField color="primary" id="outlined-basic" label="Movie to buy..." variant="outlined" onKeyUp={onChange}/>
      {console.log(props)}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://www.omdbapi.com/?t=home&apikey=aa9e23c2`)
  const data = await res.json()

  console.log("s", data);

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default InputSearch;