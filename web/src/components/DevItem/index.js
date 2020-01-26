import React from "react";

import './styles.css'

export default function DevItem({ dev, onClick }) {
    async function handleDelete() {
        onClick({
            github_username: dev.github_username
        })
    }

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(", ")}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <div className="links">
                <a href={`https://github.com/${dev.github_username}`}>Perfil no GitHub</a>
                <button onClick={handleDelete}>Deletar</button>
            </div>
        </li>
    )
}