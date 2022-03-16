import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserAsync } from '../actions/actionUsers';


export const List = () => {

    const dispatch = useDispatch();

    const { users } = useSelector(store => store.user);


    return (
        <div>
            <table className="table text-center mt-3">

                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((e, i) => (
                            <tr key={i}>
                                <td><img src={e.url} width="50" height="50" alt="" /></td>
                                <td>{e.nombre}</td>
                                <td>{e.correo}</td>
                                <td>{e.descripcion}</td>

                                <td><input
                                    value="Delete"
                                    type="button"
                                    className="btn btn-outline-dark"
                                    onClick={() => dispatch(deleteUserAsync(e.correo))}
                                /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
