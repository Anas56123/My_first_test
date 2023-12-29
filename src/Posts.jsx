import { useEffect } from "react";
import { getCabins } from "./Supabase/apiCabins"

export default function Posts() {
  useEffect(() => {
    getCabins().then((data) => console.log(data))
  }, []);
  return <div></div>;
}
