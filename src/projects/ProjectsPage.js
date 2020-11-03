import React from 'react';
import ProjectList from './ProjectList';
import { useInfiniteProjects } from './projectHooks';
// import { useState, useEffect } from 'react';

function ProjectsPage() {
  const {
    data,
    isLoading: loading,
    error,
    canFetchMore,
    fetchMore,
  } = useInfiniteProjects();

  const handleMoreClick = () => {
    return fetchMore();
  };

  const handleSave = (project) => {
    // saveProject(project);
  };

  return (
    <>
      <h1>Projects</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}

      {data?.map((projects, index) => (
        <React.Fragment key={index}>
          {/* {projects?.map((project) => {
            return <p key={project.id}>{project.name}</p>;
          })} */}
          <ProjectList projects={projects} onSave={handleSave} />
        </React.Fragment>
      ))}
      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button
                disabled={!canFetchMore}
                className="button default"
                onClick={handleMoreClick}
              >
                More...
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;
