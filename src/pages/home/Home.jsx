import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import myContext from '../../context/data/MyContext';

function Home() {
  const context = useContext(myContext);
  console.log(context);

  return (
    <Layout>
      Home
    </Layout>
  )
}

export default Home;


