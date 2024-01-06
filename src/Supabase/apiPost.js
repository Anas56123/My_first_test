import supabase from "./supabase"

export async function getPost() {
  let { data, error } = await supabase.from("Posts").select("*");
  if (error) {
    console.error("failed fecthing");
  }
  return data
}
