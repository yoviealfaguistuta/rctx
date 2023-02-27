import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function List() {

	const [DataUser, setDataUser] = useState([]);

	useEffect(() => {
		getUser();
	}, []);

	function getUser() {
		axios.get('http://127.0.0.1:8000/api/get-user').then(function (response) {
				console.log('response :>> ', response.data);
				setDataUser(response.data)

				// kode yang ada disini bakal di jalanin kalo berhasil dapet sesuatu
			}).catch(function (error) {
				console.error("error")
			}).finally(function () {
				// kode yang ada disini bakal di jalanin kalo dia berhasil atau tidak berhasil dapet sesuatu
			});
	}

	const deleteUser = (id) => {
		axios.delete('http://127.0.0.1:8000/api/delete-user/' + id).then(function (response) {
				getUser();
		}).catch(function (error) {

		}).finally(function () {

		});
	}

	return (
		<Container className='mt-5'>
			<div className="container-header-content">
				<div>
					<h2 className='mb-0'>Daftar User</h2>
					<p>Ini adalah user yang terdaftar di sistem.</p>
				</div>

				<Link to={'/create'} className='btn btn-success' variant='success'>Tambah</Link>
			</div>
			<Table bordered>
				<thead>
					<tr>
						<th>#</th>
						<th>ID</th>
						<th>Nama</th>
						<th>Email</th>
						<th>Password</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>

					{
						DataUser.map((item, index) => {
							return (
								<tr>
									<td>{index + 1}</td>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.password}</td>
									<td>
										<Link to={'/update/' + item.id} className='btn btn-primary me-2'>Perbarui</Link>
										<Button onClick={() => deleteUser(item.id)} variant="danger">Hapus</Button>
									</td>
								</tr>
							)
						})
					}
					
				</tbody>
			</Table>
		</Container>
	);
}

export default List;
