import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {

    axios.get('http://localhost:1337/sasone/pages/7?populate[ourSuccessStoryCard][populate]=*')
  }, [])



  return (
    <h1>e</h1>
  );
}
