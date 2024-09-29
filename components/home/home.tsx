import Image from 'next/image';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      {/* Navigation */}
      {/* <header className="absolute top-0 w-full p-6 flex justify-between items-center">
        <div className="text-lg font-bold">SPORTSLOGO</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#">
                <a className="hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="hover:underline">Programs</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="hover:underline">Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="hover:underline">Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="#">
          <a className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100">
            Log In
          </a>
        </Link>
      </header> */}

      {/* Main Content */}
      <main className="container mx-auto flex items-center justify-center h-screen px-4">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left side: Text content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-5xl font-bold uppercase">Train like a fighter</h1>
            <p className="text-lg max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <button className="bg-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-700">
              Train Now
            </button>
          </div>

          {/* Right side: Image */}
          <div className="relative w-96 h-96">
            <Image
              src="/common/logo.png" // Replace with your actual image path in the 'public' folder
              alt="Boxing"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center bg-transparent">
        <div className="space-x-4">
          <Link href="#">
            <a className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </Link>
        </div>
        <div>Designed by freepik</div>
      </footer> */}
    </div>
  );
};

export default HomePage;
