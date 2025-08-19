import React from 'react';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query'
import Envelope from './Envelope';

interface MainPageProps {
  username: string
}
const MainPage: React.FunctionComponent<MainPageProps> = ({username}:MainPageProps) => {
    const fetchUser= async (): Promise<UserResponse>  => {
      const response = await axios.get('http://localhost:8000/users');
      return response.data.data[0];
    }
    const { data: userData, isLoading,error,refetch} = useQuery<UserResponse>({queryKey : ['user'], queryFn : fetchUser});
    console.log("data", userData)
    return (
        <div>
            <h1>Income</h1>
            <p>{userData?.income}</p>
          {userData?.envelopes.map(envelope => <Envelope envelope = {envelope}/>)}
        </div>
    )
}

export default MainPage;