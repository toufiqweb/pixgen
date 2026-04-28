export const getAllCategory = async () => {
  const res = await fetch("https://pixgen-three.vercel.app/category.json");
  const data = await res.json();

  return data;
};
