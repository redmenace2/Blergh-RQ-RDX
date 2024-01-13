import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'


export async function GET (req: NextRequest, res: NextResponse) {
    console.log("server called")
    const ressponse = axios.get('https://jsonplaceholder.typicode.com/users');
    const resdata = (await ressponse).data


    return new Response (JSON.stringify(resdata))
  }

