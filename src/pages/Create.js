import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    let navigate = useNavigate();

    const createUser = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/create-user', {
            name: name,
            email: email,
            password: password,
        }).then(function (response) {
            return navigate("/");
        }).catch(function (error) {

        }).finally(function () {

        });
    }

    return (
        <div className="center">
            <form onSubmit={createUser} action="">
                <div className="mb-4">
                    <label className='pb-2 fw-bold'>Nama</label><br />
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className='pb-2 fw-bold'>Email</label><br />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className='pb-2 fw-bold'>Password</label><br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='btn btn-primary me-2' type="submit">Tambah User</button>
                <button className='btn btn-secondary' type="reset">Bersihkan</button>
            </form>
        </div>
    )
}

export default Create;