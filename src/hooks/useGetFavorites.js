/* eslint-disable import/no-extraneous-dependencies */
// import { useQuery } from '@apollo/react-hooks';
// import qgl from 'graphql-tag'; 
import { gql, useQuery } from '@apollo/client'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;
   
export const useGetFavorites = () => {
  const { data, error, loading } = useQuery(GET_FAVORITES, { fetchPolicy: 'network-only' });
  return { data, loading, error };
}