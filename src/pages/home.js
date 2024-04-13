import React from 'react';
import CoursesCarousel from '../components/CoursesCarousel';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <h1>Bem-vindo ao Meu Portfólio</h1>
      <CoursesCarousel />
    </div>
  );
};

export default Home;
