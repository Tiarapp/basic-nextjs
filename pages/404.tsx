import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Customer404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Oops..</h1>
      <h1 className="title-not-found">Halaman Yang Anda Cari Tidak Ada</h1>
    </div>
  );
}
