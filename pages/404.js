import Link from "next/dist/client/link";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import React from "react";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            //router.go(-1)
            router.push('/');
        }, 3000)
    }, [])
    return ( 
        <div className="not-found" id="notfound">
            <h1>Oooooopsss...</h1>
            <h2>That page doesn't exist</h2>
            <p><Link href="/"><a>Go back home</a></Link></p>
        </div>
     );
}
 
export default NotFound;