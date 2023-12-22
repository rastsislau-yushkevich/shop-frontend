import AppRoutes from 'app.routes';
import { setTokens, setUser } from 'auth/store/auth.slice';
import PageHeader from 'components/page-header.comp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let user = localStorage.getItem('currentUser');
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if(user) {
      const currentUser = JSON.parse(user);
      dispatch(setUser(currentUser));
    }
    if(accessToken && refreshToken) {
      const access_token = JSON.parse(accessToken)
      const refresh_token = JSON.parse(refreshToken)
      dispatch(setTokens({access_token, refresh_token}))
    }
  }, [])
  return (
    <BrowserRouter>
      <PageHeader />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
