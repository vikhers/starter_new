import { NextResponse } from "next/server"

export async function PUT(request: Request, context:any) {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todok = await res.json() 
    console.log(todok)
    return NextResponse.json(todok)
}


