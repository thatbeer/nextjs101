import Link from "next/link"

export const HeaderX = () => (
    <header>
        <nav>
            <Link href='/' passHref>
            <p>Home</p>
            </Link>
            <Link href='/events' passHref>
            <p>Events</p>
            </Link>
            <Link href='/about-us' passHref>
            <p>About us</p>
            </Link>
        </nav>
    </header>
);