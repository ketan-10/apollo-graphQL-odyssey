import React from 'react';
import { Layout, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';


const TRACKS = gql`
  query getTracks {
    trackForHome {
      id
      title
      thumbnail
      modulesCount
      length
      author {
        id
        name
        photo
      }
    }
  }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {

  const {loading,error,data} = useQuery(TRACKS);

  return <Layout grid>
    <QueryResult data={data} error={error} loading={loading}>
      <p>{JSON.stringify(data)}</p>
    </QueryResult>
  </Layout>;
};

export default Tracks;
