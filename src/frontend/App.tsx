import React from 'react';
import MainPage from './MainPage';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
const App: React.FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <MainPage username={"ligia"} />
    </div>
    </QueryClientProvider>
  );
}
export default App;