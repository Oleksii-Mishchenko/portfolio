import React from 'react';
import { IProject } from '../../types/Project';
import { Line } from '../Line';
import './project.scss';

type Props = {
  project: IProject;
};

export const Project: React.FC<Props> = ({ project }) => {
  const { photo, name, detail, description, info, links } = project;

  return (
    <article className="project">
      <div className="project__wrapper">
        <div className="project__visual">
          <div className="project__detail">{detail}</div>
          <img src={photo} alt={name} className="project__image" />
        </div>
      </div>

      <div className="project__wrapper">
        <div className="project__details">
          <h3 className="project__name">{name}</h3>

          <p className="project__description">{description}</p>

          <ul className="project__info">
            <h4 className="project__info-title">Project Info</h4>
            <Line />

            {Object.entries(info).map(([entryName, entryValue]) => (
              <React.Fragment key={entryName}>
                <li className="project__info-entry">
                  <span className="project__info-entry-name">{entryName}</span>

                  <span className="project__info-entry-value">
                    {entryValue}
                  </span>
                </li>

                <Line />
              </React.Fragment>
            ))}
          </ul>

          <div className="project__links">
            {links.map(({ path, name, style }) => (
              <a
                key={name}
                href={path}
                className={`project__link`}
                target="_blank"
              >
                <span
                  className={`project__link-name project__link-name--${style}`}
                >
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
