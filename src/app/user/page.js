"use client"
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import UserPageComponent from "../components/UserPageComponent";
import styles from "../constants/styles";
import UserChoosePlans from "../components/UserChoosePlans";
import UserPlanStatus from "../components/UserPlanStatus";
import { useEffect, useState } from "react";
import db from "../utils/firestore";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";

export default withPageAuthRequired(function Page() {
  const { user, error, isLoading } = useUser();
  const [planExists, setPlanExists] = useState(false);

  const userCollection = collection(db, "Users");

  const [userStats, setUserStats] = useState({});
  const [userId, setUserId] = useState({});

  useEffect(()=>{
    upsertUser();
  },[])
  

  async function upsertUser(){
    if (user && user.email){
      const q = query(userCollection, where("email", "==", user.email))
      const snapshot = await getDocs(q);
      if (snapshot.docs.length>0){
        const userData = snapshot.docs[0].data();
        setUserId({id:snapshot.docs[0].id});
        if (userData.plan  == "" || !userData.plan){
          setPlanExists(false)
        } else {
          setPlanExists(true)
          setUserStats(userData);
        }
      } else {
        const docRef = await addDoc(userCollection, {
          name: user.name,
          email: user.email,
          plan: "",
          limit:"",
          validity:"",
        });

        if (docRef.id) {
          console.log("User Created")
          setUserId({id:docRef.id});
        } else {
          alert("An error occurred. Please try again");
        }
      }
    }
  }


  return (
    <main className="flex flex-col min-h-min justify-between bg-transparent pb-10">
      <UserPageComponent/>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {!planExists && <UserChoosePlans />}
          {planExists && <UserPlanStatus {...userStats} {...userId} />}
        </div>
      </div>
    </main>
  );
});
