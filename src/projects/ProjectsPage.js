import React from 'react';
import { useProjects } from './projectHooks';
import ProjectList from './ProjectList';

function ProjectsPage() {
  const { projects, error, loading, fetching, setCurrentPage } = useProjects();

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <h1>
        Projects
        {!loading && fetching && (
          <span
            style={{
              fontWeight: 'normal',
              fontSize: 'medium',
              marginLeft: '30px',
            }}
          >
            Refreshing...
          </span>
        )}
      </h1>

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

      {!loading && !error && projects && (
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
