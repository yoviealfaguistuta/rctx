
import React from 'react';
import axios from 'axios';
import { useParams, redirect, useNavigate } from 'react-router-dom';

// Route::put('/update-user/{id}', [UserController::class, 'updateUser']);

function Update() {

    // Route::get('/detail-user/{id}', [UserController::class, 'detailUser']);

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const { id } = useParams();
    let navigate = useNavigate();

    React.useEffect(() => {
        getDetailUser();
    }, []);

    const getDetailUser = () => {
        axios.get('http://127.0.0.1:8000/api/detail-user/' + id).then(function (response) {
            
            setName(response.data.name);
            setEmail(response.data.email);
            setPassword(response.data.password);

        }).catch(function (error) {
        }).finally(function () {
            
        });
    }

    const updateUser = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/update-user/' + id, {
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
            <form onSubmit={updateUser} action="">
                <div className="mb-4">
                    <label className='pb-2 fw-bold'>Nama</label><br/>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className='pb-2 fw-bold'>Email</label><br/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className='pb-2 fw-bold'>Password</label><br/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='btn btn-primary me-2' type="submit">Perbarui Data</button>
                <button className='btn btn-secondary' type="reset">Bersihkan</button>
            </form>
        </div>
    )

}

export default Update;