import React from 'react';
import Slider from 'react-slick';
import courses from '../components/Courses'; 

const CoursesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  console.log(courses);
  return (
    <section className="courses-carousel">
      <h2>Meus Cursos</h2>
      <Slider {...settings}>
        {courses.map((curso, index) => (
          <div key={index} className="curso">
            <img src={curso.imagem} alt={curso.titulo} />
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CoursesCarousel;
