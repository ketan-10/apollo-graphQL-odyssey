import { Layout, QueryResult } from "../components";

import {useQuery, gql} from "@apollo/client";

import TrackDetail from "../components/track-detail"


const TRACK_QUERY = gql`
  query getTracks($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
    }
  }
` 


const Track = ({trackId}) => {
  const {loading, error, data} = useQuery(TRACK_QUERY,{
    variables:{ trackId },
  });

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track}/>
      </QueryResult>
    </Layout>
  )
}

export default Track;