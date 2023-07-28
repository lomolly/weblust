import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/img/wl.png" width={120} height={77} />
                {/* <h1>Weblust</h1> */}
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/weblust">Weblust List</Link>
        </nav>
     );
}
 
export default Navbar;