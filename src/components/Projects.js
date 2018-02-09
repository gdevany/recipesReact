/* eslint-disable */
import React from 'react';
import ProjectInd from '../containers/ProjectIndContainer';

// NOTE: THIS MODULE HAS BEEN REPLACED WITH LoadProjects.js

// Only show if 'projects' page is selected (default)
function Projects(props) {

  var viewIt = "";
  var projs = "";

  if(props.pageSelected === "projects") {
    window.scroll(0,0);
    projs = props.projects.map((p,i) => {

    viewIt = (
        <div className="col-xs-12 offset-sm-0 col-sm-6 offset-md-0 col-md-4 padbottom2" key={i}>
          <div className="d-flex flex-column">
            <div className="projbox">
              <img
                onClick={ (e) => {
                  e.preventDefault();
                  props.setProjChosen(p.projName)
                  props.setViewerList([])
                }}
                src={require(`../pics/${p.url}`)}
                className="projimg"
                alt="project pics"
                style={{cursor:'pointer'}}
                key={i}
                />
              <div className="d-flex justify-content-center padtop">{p.projName}</div>
            </div>
          </div>
        </div>
      )
      return viewIt;
    })
  } else return <div></div>

  return (
    <div>
      <ProjectInd />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 projtitle">
              <div className="bigger d-flex text-left padtop3">
                projects
              </div>
            </div>
            <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 projtitle">
              <div>
                {projs}
              </div>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Projects;
