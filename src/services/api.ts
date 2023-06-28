import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, collection, getDocs } from "../services/firebase";

export const fetchSupply = async () => {
  const usersCollection = collection(db, "fornecedores");
  const querySnapshot = await getDocs(usersCollection);
  const supplies = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as any;
  });
  return supplies;
};

export const fetchProduct = async () => {
  const usersCollection = collection(db, "produtos");
  const querySnapshot = await getDocs(usersCollection);
  const supplies = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() } as any;
  });
  return supplies;
};

export const createSupply = async (supplyData: any) => {
  const suppliersCollection = collection(db, "fornecedores");
  try {
    await addDoc(suppliersCollection, { ...supplyData });
  } catch (error) {
    console.error("Erro ao adicionar objeto:", error);
  }
};

export const createProduct = async (productData: any) => {
  const dbRef = collection(db, "produtos");
  try {
    await addDoc(dbRef, { ...productData });
  } catch (error) {
    console.error("Erro ao adicionar objeto:", error);
  }
};

export const deleteProduct = async (id: any) => {
  const docRef = doc(db, "produtos", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao adicionar objeto:", error);
  }
};

export const updateProduct = async (supplieData: any) => {
  console.log(supplieData);

  const docRef = doc(db, "produtos", supplieData.id);

  try {
    await updateDoc(docRef, supplieData);
    window.location.reload();
  } catch (error) {
    console.error("Erro ao adicionar objeto:", error);
  }
};
