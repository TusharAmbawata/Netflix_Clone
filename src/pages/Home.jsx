import requests from '../Request'
import Main from '../components/Main'
import MyList from '../components/MyList'
import Row from '../components/Row'

const Home = () => {
  

  return (
    <>
      <Main/>
      <Row rowID ='1' title='UpComing' fetchUrl={requests.requestUpcoming} style={{height:"200px", width:"100%"}}/>
      <Row rowID ='2' title='Popular' fetchUrl={requests.requestPopular}/>
      <Row rowID ='3' title='Trending' fetchUrl={requests.requestTrending}/>
      <Row rowID ='4' title='Top Rated' fetchUrl={requests.requestTopRated}/>
      <Row rowID ='5' title='Harry Potter' fetchUrl={requests.requestHarry}/>
    </>
  )
}

export default Home
