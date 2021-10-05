import React from 'react';
import ProjectList from './ProjectList';

import { useProjects } from './projectHooks';

function ProjectsPage() {
  const { projects, loading, error, isFetching, setPage } = useProjects();

  const handleMoreClick = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <h1>Projects</h1>
      {isFetching && <span className="toast">Refreshing...</span>}

      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error.message}
              </p>
            </section>
          </div>
        </div>
      )}

      {!loading && !error && <ProjectList projects={projects} />}

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
