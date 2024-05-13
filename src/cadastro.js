import React from 'react';
import './cadastro.css';
import cadastro from './img/cadastro.png';


function Cadastro() {

    return (
        <div>
            <div>
                <div className='imagem'>
                    <img className='img2' src={cadastro} alt='Imagem'/>
                </div>
            </div>
            <div className='texto2'>
                    <p>
                    Cadastre-se
                    </p>
            </div>
            <div id='login2'>
                <input
                class="input" 
                type="email"
                className='login3'
                placeholder='E-mail'
                />
                <input
                class="input" 
                type="nome"
                className='login4'
                placeholder='Nome'
                />
                <input
                class="input" 
                type="senha"
                className='login5'
                placeholder='Senha'
                />
                <button className='botao' type='submit'>Cadastrar</button>
            </div>
        </div>

    )

}

export default Cadastro;