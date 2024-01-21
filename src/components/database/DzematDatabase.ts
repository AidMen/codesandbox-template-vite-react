import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEAZFZKay52loTdePYMKoKOGCPuQHEBYg",
  authDomain: "dzematprototype.firebaseapp.com",
  databaseURL:
    "https://dzematprototype-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dzematprototype",
  storageBucket: "dzematprototype.appspot.com",
  messagingSenderId: "295263778798",
  appId: "1:295263778798:web:eb4b39e016e32c24a800ff",
  measurementId: "G-HFH1JY2Z4F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

class Dzemat {
  constructor(name, method, geo) {
    this.name = name;
    this.method = method;
    this.geo = geo;
  }
  toString() {
    return (
      this.name + ", " + this.method + ", " + [this.geo._lat, this.geo._lon]
    );
  }
}

// Firestore data converter
const dzematConverter = {
  toFirestore: (dzemat) => {
    return {
      name: dzemat.name,
      method: dzemat.method,
      geo: dzemat.geo,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Dzemat(data.name, data.method, data.geo);
  },
};

export async function getAllDzemat() {
  const allDzematSnapshot = await getDocs(
    collection(db, "dzemat").withConverter(dzematConverter),
  );
  return allDzematSnapshot;
}
