import supabase from "./supabase";

export async function getPosts() {
  const { data, error } = await supabase.from("Posts").select("*");
  if (error) {
    console.error("hello");
  }
  return data;
}
