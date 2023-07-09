'use client'
import { db } from '@/firebase/firebase'
import { addDoc, collection, orderBy, query } from 'firebase/firestore'
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

const Hero = async () => {

  // const dbRef = collection(db,'user')
  // const AddUser = async() =>{
    
  //   const new_user = {
  //     ic_number:"123",
  //     name:"Ika Setia"
  //   }
  //   const doc = await addDoc(dbRef,new_user)
  //   console.log("done Added new user",doc.id)
  // }

  await fetch("api/user",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify({
      name:"From Front End Name",
      ic_number:"From Front End Ic Number"
    })
  })

  const AddUser = async() =>{
    await fetch("api/user",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name:"From Front End Name",
          ic_number:"From Front End Ic Number"
        })
      })
  } 

  // cara pertama
  // const [ value ] = useCollection(query(dbRef,orderBy('name','desc')))
  // value?.docs.map(doc=>{
  //   console.log(JSON.stringify(doc.data().name))
  // })
  //  cara kedua
  
  // const [ message ] = useCollection((dbRef),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   })
  // message?.docs.map(doc=>{
  //   console.log(JSON.stringify(doc.data().ic_number))
  // })

  

  return (
    <div onClick={AddUser}>
      Click Here
      {/* main */}
      {/* side menu */}
      {/* footer */}
    </div>
  )
}

export default Hero
