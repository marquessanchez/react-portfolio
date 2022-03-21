import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    projects = [],
    setCurrentProject
    ,
    contactSelected,
    currentProject
    ,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentProject
      .name);
  }, [currentProject
  ]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          {/* <img src="../../images/logo192.png"alt="react"></img> */}
          <span role="img" aria-label="cool"> 😎</span> Marques
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {projects.map((Project
          ) => (
            <li
              className={`mx-1 ${
                currentProject
                .name === Project
                .name && !contactSelected && 'navActive'
                }`}
              key={Project
                .name}
            >
              <span
                onClick={() => {
                  setCurrentProject
                  (Project
                    );
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(Project
                  .name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
