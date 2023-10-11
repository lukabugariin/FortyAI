import Image from "next/image";

export const Loader = () => {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
      <div className='w-10 h-10 animate-spin rounded'>
        <Image alt='logo' src='/logo.png' fill />
      </div>
      <p className='text-gray-700 text-sm '>Forty is loading</p>
    </div>
  );
};
