import { Raleway } from '@next/font/google';

const raleway = Raleway({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <main>hola putita</main>
    </>
  );
}
