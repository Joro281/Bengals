import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BENGALS - Fish Carrier',
  description: 'Premium seafood delivery since 2011. Fresh fish, shellfish, mollusks, and cephalopods delivered to your door.',
};

const HomePage = () => {
  redirect('/about');
};

export default HomePage;
