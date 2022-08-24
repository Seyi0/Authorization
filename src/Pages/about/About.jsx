import React from 'react';
import Card from '../../components/UI/Card/Card';
import BlogPost from '../../components/BlogPost/BlogPost';
import Sidebar from '../../components/Sidebar/Sidebar';
import Layout from '../../components/Layout/Layout';



const About = (props) => {

    console.log(props);


  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
   )

 }

export default About;