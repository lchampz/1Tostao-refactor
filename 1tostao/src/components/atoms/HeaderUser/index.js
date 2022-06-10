import React, { useEffect, useState } from 'react';
import bg from "../../../assets/img/background.jpg";
import { Banner, Username, MenuUser, UserImg } from './styled'
import profile from './../../../assets/img/profile.png'
import { useUserAuth } from '../../../request/hooks/Auth.js';
import { useNavigate} from 'react-router-dom'
import db from '../../../services/Firebase'
import {collection, doc, getDocs, where, query} from 'firebase/firestore';

const HeaderUser = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const [users, setUsers] = useState();


    if(!user){
        navigate("/")
    }


    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };


      // useEffect(() => {
      //   const getUsers = async () => {
      //     const data = await getDocs(userCollectionRef);
      //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   };
      //   getUsers();
      // }, []);

      
      useEffect(() => {
        const getUsers = async () => {
          const docRef = query(collection(db, "users"), where("uid", "==", user.uid));
          const querySnapshot = await getDocs(docRef);
          querySnapshot.forEach((doc) => {
            console.log(doc.id, "=> ", doc.data());
          })
        }
        getUsers();
      })
      
      


    return ( 
        <>
            <Banner bgImg={bg}>
            </Banner>
            <MenuUser>
               <UserImg src= {profile}/> 
                <Username>{user && user.email}</Username>
            </MenuUser>
            <button onClick={handleLogout}>Logout</button>
        </>
     );
}
 
export default HeaderUser;