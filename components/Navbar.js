import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    const a=100
    const r=190/146
    return ( 
        <nav id="navbar">
            <div className="logo">
                <Link href="/"><a><Image src="/logo.png"
                    width={a}
                    height={a/r}
                /></a></Link>
            </div>
            <Link href="/"><a className="btn">Home</a></Link>
            <Link href="about"><a className="btn">A propos</a></Link>
            <Link href="contact"><a id='cta' className="btn">Contact</a></Link>
        </nav>
     );
}
 
export default Navbar;