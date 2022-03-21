import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import RunBuddy from '../../assets/images/run-buddy.png';
import DinnerTime from '../../assets/images/dinner-time02.png';
import PhotoApp from '../../assets/images/photo-app.png';

function Gallery(props) {
  const { currentProject } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
    
      <img src={RunBuddy} alt="project"></img>
      <img src={DinnerTime} alt="project"></img>
      <img src={PhotoApp} alt="project"></img>
      <p>{currentProject.description}</p>
      <PhotoList project={currentProject.name} />
    </section>
  );
}
export default Gallery;
