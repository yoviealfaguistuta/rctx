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

	return (
		<Container className='mt-5'>
			<div className="container-header-content">
				<div>
					<h2 className='mb-0'>Daftar User</h2>
					<p>Ini adalah user yang terdaftar di sistem.</p>
				</div>

				<Button variant='success'>Tambah</Button>
			</div>
			<Table bordered hover>
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
									<td>{item.username}</td>
									<td>{item.password}</td>
									<td>
										<Link to={'/update/' + item.id} className='me-2'>Perbarui</Link>
										<Button variant="danger">Hapus</Button>
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
