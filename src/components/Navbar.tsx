// components/Navbar.js
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const paths = ["/", "/blog", "/blog/primer-post", "/about"]
  return (
    <nav className="bg-white shadow-lg">
        <div className="mx-auto px-4 max-w-4xl mx-auto">
            <div className="flex justify-between">  
                <div>
                <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <h1 className="font-bold text-2xl">Rick And Morty</h1>
                </Link>
                </div>
{/* 
                <div className="flex items-center justify-start">
                  <Link href="/perso">
                    <span className="text-gray-300 hover:text-white cursor-pointer">Personajes</span>
                  </Link>
                </div> */}
            </div>
      </div>     
    </nav>
  );
};

export default Navbar;
