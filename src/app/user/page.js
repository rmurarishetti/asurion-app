"use client"
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import UserPageComponent from "../components/UserPageComponent";
import styles from "../constants/styles";
import UserChoosePlans from "../components/UserChoosePlans";
import UserPlanStatus from "../components/UserPlanStatus";
import { useState } from "react";
import db from "../utils/firestore";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";

export default withPageAuthRequired(function Page() {
  const { user, error, isLoading } = useUser();
  const [planExists, setPlanExists] = useState(false);

  const userCollection = collection(db, "Users");

  async function upsertUser(){
    if (user && user.email){
      const q = query(userCollection, where("email", "==", user.email))
      const snapshot = await getDocs(q);
      if (snapshot.docs.length>0){
        const user = snapshot.docs[0].data();
        if (user.plan  == "" || !user.plan){
          setPlanExists(false)
        } else {
          setPlanExists(true)
        }
      } else {
        const docRef = await addDoc(userCollection, {
          name: user.name,
          email: user.email,
          plan: "",
        });

        if (docRef.id) {
          console.log("User Created")
        } else {
          alert("An error occurred. Please try again");
        }
      }
    }
  }


  return ( upsertUser(),
    <main className="flex flex-col min-h-min justify-between bg-transparent pb-10">
      <UserPageComponent/>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {!planExists && <UserChoosePlans />}
          {planExists && <UserPlanStatus />}
        </div>
      </div>
    </main>
  );
});
