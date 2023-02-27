import React from 'react';
import axios from 'axios';

function Create() {

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const createUser = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/create-user', {
            name: name,
            email: email,
            password: password,
        }).then(function (response) {

        }).catch(function (error) {

        }).finally(function () {

        });
    }

    return (
        <form onSubmit={createUser} action="">
            <div className="mb-3">
                <label htmlFor="">Nama</label><br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="">Email</label><br/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="">Password</label><br/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Simpan</button>
        </form>
    )
}

export default Create;