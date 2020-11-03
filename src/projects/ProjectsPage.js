import React from 'react';
import ProjectList from './ProjectList';
import { useProjects } from './projectHooks';
import { useState, useEffect } from 'react';

function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: projects = [],
    isLoading: loading,
    error,
    refetch,
  } = useProjects(currentPage);

  useEffect(() => {
    refetch(currentPage);
  }, [currentPage, refetch]);

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
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

      <ProjectList projects={projects} onSave={handleSave} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
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
