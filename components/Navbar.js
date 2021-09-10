import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    const a=100
    const r=190/146
    return ( 
        <nav>
            <div className="logo">
                <Link href="/"><a><Image src="/logo.png"
                    width={a}
                    height={a/r}
                /></a></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="about"><a>A propos</a></Link>
            <Link href="contact"><a id='cta'>Contact</a></Link>
        </nav>
     );
}
 
export default Navbar;