import OrderForm from '../components/order/OrderForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Seafood - BENGALS Fish Carrier',
  description: 'Order fresh seafood online from BENGALS Fish Carrier. Choose from our wide selection of fish, shellfish, mollusks, and cephalopods. Fast delivery since 2011.',
};

const OrderPage = () => {
  return <OrderForm />;
};

export default OrderPage;