import localFont from 'next/font/local';
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const greatVibes = localFont({
  src: '../fonts/GreatVibes-Regular.ttf',
});

export const notoSerif = localFont({
  src: '../fonts/NotoSerifKR-VariableFont_wght.ttf',
});

export const RIDIBatang = localFont({
  src: '../fonts/RIDIBatang.otf',
});