'use client';

import { useRouter } from 'next/navigation';

const Error = () => {
  const router = useRouter();
  return (
    <div>
      <h2>Algo salio mal!</h2>
      <button onClick={() => router.push('/')}>Ir al inicio</button>
    </div>
  );
};

export default Error;
