import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, collection, getDocs } from "../services/firebase";

export const fetchSupply = async () => {
  const usersCollection = collection(db, "fornecedores");
  try {
    const querySnapshot = await getDocs(usersCollection);
    const supplies = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() } as any;
    });
    return supplies;
  } catch (error) {
    console.error("Erro ao procurar os fornecedores.", error);
  }
};

export const fetchProduct = async () => {
  const usersCollection = collection(db, "produtos");
  try {
    const querySnapshot = await getDocs(usersCollection);
    const supplies = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() } as any;
    });
    return supplies;
  } catch (error) {
    console.error("Erro ao procurar os produtos.", error);
  }
};

export const createSupply = async (supplyData: any) => {
  const suppliersCollection = collection(db, "fornecedores");
  try {
    await addDoc(suppliersCollection, { ...supplyData });
  } catch (error) {
    console.error("Erro ao criar fornecedor.", error);
  }
};

export const createProduct = async (productData: any) => {
  const dbRef = collection(db, "produtos");
  try {
    await addDoc(dbRef, { ...productData });
  } catch (error) {
    console.error("Erro ao criar produto.", error);
  }
};

export const deleteProduct = async (id: any) => {
  const docRef = doc(db, "produtos", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao deletar produto.", error);
  }
};

export const updateProduct = async (supplieData: any) => {
  const docRef = doc(db, "produtos", supplieData.id);
  try {
    await updateDoc(docRef, supplieData);
    window.location.reload();
  } catch (error) {
    console.error("Erro ao atualizar produto.", error);
  }
};

export const deleteProductSupply = async (productSupply: any) => {
  const usersCollection = collection(db, "fornecedores");

  try {
    const querySnapshot = await getDocs(usersCollection);
    querySnapshot.forEach(async (doc) => {
      const supplies = doc.data().products;
      const updatedSupplies = supplies.filter((supply: any) => {
        return supply.id !== productSupply;
      });
      await updateDoc(doc.ref, { products: updatedSupplies });
    });
  } catch (error) {
    console.error("Erro ao deletar produto.", error);
  }
};
