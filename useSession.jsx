import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [isClient, setIsClient] = useState(false);
  const { data: session, status } = useSession();

  // Ensure the component only runs client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return null to avoid errors during SSR
    return null;
  }

  // Handle loading state
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  // Show different content based on session status
  return (
    <div>
      {session ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>You need to sign in.</p>
      )}
    </div>
  );
};

export default Dashboard;
