import Navbar from '../componenets/Navbar';
import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="success-continear">
        <h2>Order Successfull</h2>
        <button onClick={() => router.push('/')} className="success-btn">
          Back to home
        </button>
      </div>
    </>
  );
};

export default Success;
