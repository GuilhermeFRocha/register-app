import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, collection, getDocs } from "../services/firebase";

interface ProductPropsValues {
  productName: string;
  description: string;
  brand: string;
  unit: string;
  quantity: string;
  photo: string;
}

interface Product {
  id: string;
  productName: string;
  description: string;
  photo: string;
}

interface SupplyPropsValues {
  nome: string;
  cnpj: string;
  cep: string;
  street: string;
  state: string;
  city: string;
  products: Product[];
}

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

export const createSupply = async (supplyData: SupplyPropsValues) => {
  const suppliersCollection = collection(db, "fornecedores");
  try {
    await addDoc(suppliersCollection, { ...supplyData });
  } catch (error) {
    console.error("Erro ao criar fornecedor.", error);
  }
};

export const createProduct = async (productData: ProductPropsValues) => {
  const dbRef = collection(db, "produtos");
  try {
    await addDoc(dbRef, { ...productData });
  } catch (error) {
    console.error("Erro ao criar produto.", error);
  }
};

export const deleteProduct = async (id: string) => {
  const docRef = doc(db, "produtos", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao deletar produto.", error);
  }
};

export const deleteSupply = async (id: string) => {
  const docRef = doc(db, "fornecedores", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Erro ao deletar produto.", error);
  }
  window.location.reload();
};

export const updateProduct = async (productData: any) => {
  const docRef = doc(db, "produtos", productData.id);
  try {
    await updateDoc(docRef, productData);
    window.location.reload();
  } catch (error) {
    console.error("Erro ao atualizar produto.", error);
  }
};

export const updateSupply = async (supplyData: any) => {
  const docRef = doc(db, "fornecedores", supplyData.id);
  try {
    await updateDoc(docRef, supplyData);
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
  window.location.reload();
};
