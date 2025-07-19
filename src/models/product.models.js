
import {db} from "./firebase.js";

import { collection, getDocs, doc, getDoc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

const productsColletion = collection(db, "products");
//ok
export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsColletion);
        const products =  snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products;
    } catch (error) {
        console.error(error);
    }
};
//ok
export const getProductById = async (id) => {
    try {
        const docRef = doc(productsColletion, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
    } catch (error) {
        console.error(error);
    }
};
//ok
export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsColletion, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error('Error creando producto:', error);
    
  }
};
//ok
export const deleteProduct = async (id) => {
    try {
        const productRef = doc(productsColletion, id);
        const snapshop = await getDoc(productRef);

        if (!snapshop.exists() ){
            return false;
        }

        await deleteDoc(productRef);
        return true;

    } catch (error) { 
        console.error(error);
    }
};
//ok
export const updateProduct = async (id, data) => {
  try {
    const productRef = doc(productsColletion, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;  // Producto no encontrado
    }

    await updateDoc(productRef, data);  // Actualiza solo los campos que le pases
    return true;
  } catch (error) {
    console.error("Error actualizando producto:", error);
    throw new Error("Error actualizando producto");
  }
};

