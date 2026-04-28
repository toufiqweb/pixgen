export const getAllPhotos = async () => {
  const res = await fetch("https://pixgen-three.vercel.app/data.json", {cache: "no-store"});
  const data = await res.json();

  return data;
};
