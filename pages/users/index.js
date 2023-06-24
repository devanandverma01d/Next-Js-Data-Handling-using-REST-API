import Layout from '@/components/Layout'
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'

const index = ({data}) => {
    const router = useRouter()
  return (
    <div>
        <Layout>
            <h1>All users list</h1>
            <h1>{data.length}</h1>
            <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            data.map((cv,idx)=>{
                                return(
                                    <>
                                    <tbody>
                                        <tr>
                                            <td>{cv.id}</td>
                                            <td>{cv.name}</td>
                                            <td>{cv.username}</td>
                                            <td>{cv.email}</td>
                                            <td>
                                                <button onClick={() => router.push(`/users/${cv.id}`)}>
                                                    View detail
                                                </button>
                                            </td>
                                        </tr> 
                                    </tbody>
                                    </>
                                )
                            })
                        }
                        
                    </table>
        </Layout>
    </div>
  )
}



export async function getStaticProps(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    return{
        props:{
            data
        }
    }
}

export default index;