import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import RunBuddy from '../../assets/images/run-buddy.png';
import DinnerTime from '../../assets/images/dinner-time02.png';
import PhotoApp from '../../assets/images/photo-app.png';
import Final from '../../assets/images/flowers.png';

function Portfolio(props) {
  const { currentProject } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
    
      <p>{currentProject.description}</p>
      
      <img src={RunBuddy} alt="project"></img>
      <img src={DinnerTime} alt="project"></img>
      <img src={PhotoApp} alt="project"></img>
      <a href="https://flowers-to-go.herokuapp.com/#flower-products"><img src={Final} alt="project"></img></a>

      <PhotoList project={currentProject.name} />
    </section>
  );
}
export default Portfolio;
