// import Final from '../../../public/images/flowers.to-go.png';

function Portfolio(props) {
  const { currentProject } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentProject.name)}</h1>
    
      <p>{currentProject.description}</p>
      
      <a href="https://flowers-to-go.herokuapp.com/#flower-products"><img src={Final} alt="project"></img></a>
      
      {/* <PhotoList project={currentProject.name} /> */}
    </section>
  );
}
export default Portfolio;