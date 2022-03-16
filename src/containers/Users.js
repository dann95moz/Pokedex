import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { registerUserAsync } from '../actions/actionUsers';
import { useDispatch } from 'react-redux';
import { fileUpload } from '../helpers/FileUpload';
import { List } from './List';
import { listUsersAsync } from '../actions/actionUsers';

const Input = styled.input`
    background-color: #3f51b5;
    border-radius:10px;
    border:none
`

export const Users = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUsersAsync())
    }, [dispatch])

    const formik = useFormik({
        initialValues: {
            url: "",
            nombre: "",
            correo: "",
            descripcion: ""
        },
        onSubmit: (data) => {
            console.log(data);
            dispatch(registerUserAsync(data))
        },

    })

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.url = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }




    return (
        <div>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div className="col-9">
                        <h3 className="text-center"> Users </h3>

                        <form className="form-group" onSubmit={formik.handleSubmit}>
                            <input
                                id="fileSelector"
                                type="file"
                                className="form-control "
                                placeholder="url image"
                                name="url"
                                style={{ display: 'none' }}
                                onChange={handleFileChanged}
                                required />

                            <button
                                className="btn btn-dark"
                                onClick={handlePictureClick}
                                type="button">Imagen</button>

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="nombre"
                                autoComplete="off"
                                placeholder="user name"
                                onChange={formik.handleChange}
                                required />

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="correo"
                                autoComplete="off"
                                placeholder="email"
                                onChange={formik.handleChange}
                                required />

                            <textarea
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="description"
                                onChange={formik.handleChange}
                                required
                            ></textarea>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input
                                    value="Save"
                                    type="submit"

                                />
                            </div>
                        </form>
                    </div>
                    <List />
                </div>
            </div>
        </div>
    )
}
