import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc, writeBatch, documentId, DocumentSnapshot } from "firebase/firestore";
import products from "./data"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUD6I0iG04Q9ep4AMicP7K_2E1Fux8vPg",
  authDomain: "maybelline-e29d5.firebaseapp.com",
  projectId: "maybelline-e29d5",
  storageBucket: "maybelline-e29d5.firebasestorage.app",
  messagingSenderId: "33152743101",
  appId: "1:33152743101:web:8a55a014dfefd8fb51e9d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default async function getAsyncData() {
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef)
  const documentsData = productsSnapshot.docs.map(doc => {
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData;
  }
  )
  return documentsData; // resolve(documentsData)
}

export async function getAsyncItemById(itemID) {
  const docRef = doc(db, "products", itemID)
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  return docData;
}

export async function getAsyncItemsByCategory(catID) {
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", catID))
  const productsSnapshot = await getDocs(q)
  const documentsData = productsSnapshot.docs.map(doc => {
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData;
  }
  )
  return documentsData;
}

export async function exportProductsToDB() {
  for (let item of products) {
    delete item.id;
    const docID = await addDoc(collection(db, "products"), item)
  }
}

export async function createBuyOrder(orderData) {
  const newOrderDoc =
    await addDoc(collection(db, "orders"), orderData);
  return newOrderDoc.id
}

export async function createBuyOrderWithStockUpdate(order) {
  const orderRef = collection(db, "order");
  const productsRef = collection(db, "products");
  const batch = writeBatch(db);
  const arrayIds = order.items.map((item) => item.id);
  const q = query(productsRef, where(documentId(), "in", arrayIds));
  const querySnaphot = await getDocs(q);
  const docsToUpdate = querySnaphot.docs;
  let itemsSinStock = [];
  docsToUpdate.forEach((doc) => {
    let { stock } = doc.data();
    let itemInCart = order.items.find((item) => item.id === doc.id);
    let countInCart = itemInCart.count;
    let newStock = stock - countInCart;
    if (newStock < 0) {
      itemsSinStock.push(doc.id);
    }
    else {
      batch.update(doc.ref, { stock: newStock });
    }
  });
}