import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Loading';
const Form = ({setPosition}) => {

    // geting user form api 
    const { data: users = [], isError, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    
    if (isError) {
        console.log(isError);
        return toast.error('something went wrong')
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        const userid = e.target.option.value
        const title = e.target.title.value
        const body = e.target.body.value

        const user = {
            title: title,
            body: body,
            userId: userid
        }

        if (userid === '' || title === '' || body === '') {
            toast.error('please fill up all the field')
        } else if (userid == 0) {
            toast.error('please select a user')
        } else {
            axios.post('https://jsonplaceholder.typicode.com/posts', user)
                .then(res => {
                    toast.success('post created successfully')
                    console.log(res);
                }).catch(err => {

                    console.log(err);
                })
        }

    }

    const handelmap = (e) => {
        e.preventDefault()
        const userid = e.target.value
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(res => {
                const { lat, lng } = res.data.address.geo
                const location = [lat, lng].map(Number)
                setPosition(location)
              
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-row lg:flex-row-reverse">
                     
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body" onSubmit={handelSubmit}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Pick a User</span>
                                </label>
                                <select className="select select-bordered" name='option' onBlur={handelmap}>
                                    <option value="0">Select a user</option>
                                    {users.map((user) => {
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
                                <input type="text" placeholder="body" className="input input-bordered" name='body' />
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