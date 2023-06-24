import Layout from '@/components/Layout'
import axios from 'axios'
import React from 'react'

const UserId = ({data}) => {
    console.log('data----->',data)
  return (
   
    <Layout>
        <div className='container'>
            <h1>Users details page</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address/City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.address.city}</td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </Layout>
  )
}
export default UserId;

export async function getServerSideProps(context){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.query.id}`);
    const data = response.data;
    return{
        props:{
            data
        }
    }
}

