import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"; //Link é uma outra forma de usar a tag 'a' porque a tag a faz com que a página faça o load inteiro na página
import { FiLogIn } from "react-icons/fi"; //E a forma de importar o ícone do feather-icons como component dentro do projeto. obs.: Formato svg

import api from "../../services/api";
// import "./styles.css";
import { Container } from "./styles.js";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
    const [id, setId] = useState("");
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post("session", { id });

            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", response.data.name);

            history.push("/profile");
        } catch (err) {
            alert("Falha no login.");
        }
    }
    return (
        <Container>
            <section className='form'>
                <img src={logoImg} alt='Logo' />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input
                        type='text'
                        placeholder='Sua ID'
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <button className='button' type='submit'>
                        Entrar
                    </button>

                    <Link className='back-link' to='/register'>
                        <FiLogIn size={16} color='#e02041'></FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt='Heroes' />
        </Container>
    );
}
