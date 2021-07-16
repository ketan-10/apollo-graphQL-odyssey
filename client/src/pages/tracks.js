import React from 'react';
import { Layout, QueryResult } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from "../containers/track-card";


// Construct the 'Query' 
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

  // send to 'useQuery' which will useConext of Apollo. 
  // also send re-render when loading is completed.
  const {loading,error,data} = useQuery(TRACKS);

  return (
    <Layout grid>
      {/* Conditionally render according to re-render stage */}
      <QueryResult data={data} error={error} loading={loading}>
        {data?.trackForHome?.map((track)=>(
          <TrackCard track={track} key={track.id}/>
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
