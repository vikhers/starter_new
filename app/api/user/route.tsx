import { db } from "@/firebase/firebase";
import { addDoc, and, collection, collectionGroup, deleteDoc, deleteField, doc, getCountFromServer, getDocs, getFirestore, or, orderBy, query, updateDoc, where } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { useCollection } from "react-firebase-hooks/firestore";
import admin from "firebase-admin"
import { adminDb } from "@/firebase/firebaseAdmin";

export async function GET(request:NextRequest) {
    const coll = collection(db, "/user/region/central/company/ccsi");
    // const queryQ = query(coll, where('name', '!=', 'Anju Vikhers1'));
    // const queryQ = query(coll, where('name', 'not-in', ['Anju Vikhers1']));
    // const queryQ = query(coll, where('name', 'in', ['Anju Vikhers']),where('ic_number', 'in', ['123']));
    // const queryQ = query(coll, or(where('name', 'in', ['Anju Vikhers']),where('ic_number', 'in', ['123'])));
    const queryQ = query(coll,orderBy('name'));
    const snapshot = await getCountFromServer(queryQ);
    
    const querySnapshot = await getDocs(queryQ);
    
    let users:any  = []
    querySnapshot.forEach((doc) => {
        users.push(doc.data())
    });

    return NextResponse.json({"code":200,"message":users})
}
// const url = "https://jsonplaceholder.typicode.com/todos"
// const dbRef = collection(db,'user')

// export async function GET(request:Request) {
//     const db = getFirestore()
//     // collection ref
//     const colRef = collection(db,'user')

//     await getDocs(colRef).then((snaphot)=>{
//         let books:any  = []
//         snaphot.forEach((doc)=>{
//             console.log(doc.id)
//             books.push({...doc.data(),id:doc.id})
//         })
//         // console.log("test")
//         // return NextResponse.json({"code":books,"message":""})
//     })
//     return NextResponse.json({"code":"books","message":""})
//     // getDocs(colRef).then((snaphot)=>{
//     //     let books:any  = []
//     //     snaphot.forEach((doc)=>{
//     //         console.log(doc.id)
//     //         books.push({...doc.data(),id:doc.id})
//     //     })
//     //     return NextResponse.json({"code":"books","message":""})
//     // }).catch(error=>{
//     //     return NextResponse.json({"code":error.message,"message":""})
//     //     console.log(error.message)
//     // })
//     // return NextResponse.json({"code":"books","message":""})
// }

// export async function POST(request:NextRequest) {
//     const createdAt = admin.firestore.Timestamp.now()
//     await adminDb
//     .collection("user")
//     .doc("testDoc")
//     .collection("testCollection")
//     .add({
//         name:"testName",
//         ic_number:"testIcNumber"
//     })
//     return NextResponse.json({"code":500,"message":createdAt})
//     // try {
//     //     const newUsers:[] = await request.json()
//     //     for(const newUser of newUsers) {
//     //         const doc = await addDoc(dbRef,newUser)
//     //     }
//     //     return NextResponse.json({"code":200,"message":`Added new user successfully`})
//     // } catch (error) {
//     //     return NextResponse.json({"code":500,"message":error})
//     // }
// }

// export async function GET(request:NextRequest) {
//     const snapshot = await adminDb
//     .collection("user")
//     // .doc("testDoc")
//     // .collection("testCollection")
//     // .where(admin.firestore.FieldPath.documentId(),'==','yQKuVBhC4Um1G7KCSW71')
//     // .where('name','==','testName')
//     // .orderBy('name')
//     .get()
//     const userCountsByRegion: { [regionId: string]: number } = {};
//     snapshot.docs.map(doc=>{
//         const userData = doc.data();
//         const regionId = userData.region;
//         // Increment the count for the region
//         if (userCountsByRegion[regionId]) {
//             userCountsByRegion[regionId]++;
//         } else {
//             userCountsByRegion[regionId] = 1;
//         }
//     })

//     // const testDocCol= collectionGroup(db,'testDoc')
//     // const queryy = query(
//     //     testDocCol
//     // )
//     // const snapshot = await getCountFromServer(queryy)
//     // const totalCount = snapshot.data().count

//     // cara lain
//     // const coll = collection(db, "user");
//     // const query_ = query(coll, where('name', '==', 'Anjuy'));
//     // const snapshot = await getCountFromServer(query_);
//     // console.log('count: ', snapshot.data().count);


//     return NextResponse.json({"code":200,"message":userCountsByRegion})
//     // try {
//     //     console.log("test")
//     //     return NextResponse.json({"code":200,"message":"get"})    
//     // } catch (error) {
//     //     console.log(error)
//     //     return NextResponse.json({"code":200,"message":"get", error})
//     // }
//     // try {
//     //     const data:any = []
//     //     const docsSnap = await getDocs(dbRef);
//     //     docsSnap.forEach(doc => {
//     //         data.push(doc.data())
//     //     })    
//     //     return NextResponse.json({"code":200,"message":"get", data})
//     // } catch (error) {
//     //     return NextResponse.json({"code":500,"message":"get"})
//     // }
// }

// export async function DELETE(request:NextRequest) {
//     try {
//         const docRef = doc(db, "user", "cmHft1mv2WorNDoTrZTm");
//         deleteDoc(docRef).then(() => {
//             console.log("Entire Document has been deleted successfully.")
//         })
//         .catch(error => {
//             console.log(error);
//         })
//         return NextResponse.json({"code":200,"message":"delete"})
//     } catch (error) {
//         return NextResponse.json({"code":500,"message":"delete"})
//     }
// }

// export async function PUT(request:NextRequest) {
//     try {
//         const docRef = doc(db, "user", "GbyL493B5mJzyBuCNkaB");
//         const data = {
//             ic_number: "613"
//           };
          
//         updateDoc(docRef,data).then(() => {
//             console.log("A New Document Field has been added to an existing document.")
//         })
//         .catch(error => {
//             console.log(error);
//         })
//         return NextResponse.json({"code":200,"message":"delete"})
//     } catch (error) {
//         return NextResponse.json({"code":500,"message":"delete"})
//     }
// }

// GET using params
// export async function GET(request:NextRequest) {
//     const {searchParams} = new URL(request.url)
//     const name = searchParams.get('name')
//     const instrument = searchParams.get('instrument')
//     return NextResponse.json({name,instrument})
// }

// GET using params from entries
// export async function GET(request:NextRequest) {
//     const {searchParams} = new URL(request.url)
//     const obj = Object.fromEntries(searchParams.entries())
//     return NextResponse.json(obj)
// }

// GET data without params
// export async function GET(request:NextRequest) { 
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//     const todos: Todo[] = await res.json()
//     return NextResponse.json(todos)

// }

// export async function GET(request:NextRequest) {
//     const { searchParams} = new URL(request.url)
//     const id = searchParams.get('id')

//     const res = await fetch(`https://data.mongodb-api.com/product/`, {
//         headers:{
//           'Content-Type':'application/json',
//           'API-Key': "process.env.DATA_API_KEY",
//         }
//     })

//     const product = await res.json()

//     return NextResponse.json({id})
// }

// export async function POST(request:NextRequest) {
//     const  body = await request.json();
//     console.log(request.cookies.get('cookie'))
//     return new Response(JSON.stringify(body))
// }

// type User = {
//     name?:string,
//     ic_number?:"string"
// }


// export async function DELETE(request:Request) {
//     try {
//         const { id }: Partial<Todo> = await request.json();
//     } catch (error) {
//         return NextResponse.json({"message:":`Todo ${error} deleted`})
//     }
//     // console.log(id)
//     // if (!id) return NextResponse.json({"message":"Todo id is required"})

//     // await fetch(`${url}/${id}`,{
//     //     method:'DELETE',
//     //     headers:{
//     //         'Content-Type':'application/json',
//     //         'API-Key':"API_KEY"
//     //     }
//     // })
    
// }

