import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth-context';
import { getAuthUser } from './../api/auth';

const useAuth = () => {
  const { user, updateAuthUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuthUser()
      .then((data) => updateAuthUser(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
};

export default useAuth;
