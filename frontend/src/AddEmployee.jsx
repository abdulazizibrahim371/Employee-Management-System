import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        salary: '',
        image: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("password", data.password);
        formdata.append("address", data.address);
        formdata.append("salary", data.salary);
        formdata.append("image", data.image);

        axios.post('http://localhost:8000/create', formdata)
        .then(res => {
            navigate('/employee');
        })
        .catch(err=> console.log(err))
    }
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
        <h2>Add Employee</h2>
        <form class="row g-3 w-50" onSubmit={handleSubmit}>
        <div class="col-12">
                <label for="inputName" class="form-label">Name</label>
                <input type='text' class="form-control" id='inputName' placeholder='Enter name' 
                onChange={e => setData({...data, name: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type='email' class="form-control" id='inputEmail4' placeholder='Enter Email' 
                onChange={e=>setData({...data, email: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type='password' class="form-control" id='inputPassword4' placeholder='Enter Password' 
                onChange={e=>setData({...data, password: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputSalary" class="form-label">Salary</label>
                <input type='text' class="form-control" id='inputSalary' placeholder='Enter Salary' 
                onChange={e=>setData({...data, salary: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type='text' class="form-control" id='inputAddress' placeholder='Tamale' 
                onChange={e=>setData({...data, address: e.target.value})}/>
            </div>
            <div class="col-12">
                <label for="inputGroupFile01" class="form-label">Select Image</label>
                <input type='file' class="form-control" id='inputGroupFile01' 
                onChange={e=>setData({...data, image: e.target.files[0]})}/>
            </div>
            <div class="col-12">
                <button type='submit' class="btn btn-primary mb-3">Create</button>
            </div>
        </form>
    </div>
  )
}

export default AddEmployee