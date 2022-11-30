import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const Form = () => {
 // geting user form api 
    const {data:users=[],isError,isLoading}=useQuery({
        queryKey:['user'],
        queryFn:async()=>{
            const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
            return data
        }
    })
    if (isLoading) {
        return <div>Loading...</div>
    }
        
    if (isError) {
        return <div>Error...</div>
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
       const userid=e.target.option.value
       const title = e.target.title.value
        const body = e.target.body.value
        if (userid===''||title===''||body==='') {
            alert('please fill all the fields')
        }
            const ueser ={
                title : title,
                body : body,
                userId : userid
            }
            axios.post('https://jsonplaceholder.typicode.com/posts',ueser)
            .then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
            
    }
 
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handelSubmit}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Pick a User</span>                 
                                </label>
                                <select className="select select-bordered" name='option'>
                                    <option value="0">Select a user</option> 
                                    {users.map((user)=>{
                                        return <option value={user.id} key={user.id}> {user.name}</option>
                                    })}
                                </select>
                        
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">title</span>
                                </label>
                                <input type="text" placeholder="title" className="input input-bordered" name='title' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">body</span>
                                </label>
                                <input type="text" placeholder="body" className="input input-bordered" name='body'/>
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;