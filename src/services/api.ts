import { database, get, set, ref, remove } from "../services/firebase";

export const fetchSupply = async () => {
  const snapshot = await get(ref(database, "/Fornecedores"));
  const data = snapshot.val();
  return data;
};

export const createSupply = async (supplyData: any) => {
  await set(ref(database, "/Fornecedores"), supplyData);
};

export const deleteSupply = async () => {
  await remove(ref(database, "/Fornecedores"));
};

export const fetchProduct = async () => {
  const snapshot = await get(ref(database, "/Produtos"));
  const data = snapshot.val();
  return data;
};

export const createProduct = async (productData: any) => {
  await set(ref(database, "/Produtos"), productData);
};

export const deleteProduct = async (id: any) => {
  await remove(ref(database, `/Produtos/${id}`));
};
