import React from 'react';
import './Home.css';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import Article from '../components/Article/Article';

function Home() {
    return (
        <div className="home">
            <HeaderBar />
            <div className="articles">
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    );
}


export default Home;