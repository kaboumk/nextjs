import Link from "next/link";

const Footer = () => {
    return ( 
        <footer>
            Copyright Atom 2021 <br/>
            <Link href="/ninjas"><a>List of ninjas</a></Link>
        </footer>
     );
}
 
export default Footer;