'use client'; // if you're using app router and this is a client component

import { useRouter } from 'next/navigation'; // use 'next/router' if you're in pages directory

const YourComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Dashboard
      </button>
    </div>
  );
};

export default YourComponent;
