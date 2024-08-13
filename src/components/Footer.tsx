import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <span className="text-gray-300 hover:text-white cursor-pointer">Inicio</span>
            </Link>
          </div>
          <div className="text-gray-400">
            &copy; 2024 Rick And Morty - Todos los Derechos Reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;