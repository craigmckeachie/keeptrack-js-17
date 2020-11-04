import React from 'react';
import ProjectList from './ProjectList';
import { useInfiniteProjects } from './projectHooks';

function ProjectsPage() {
  const {
    data: pages,
    isLoading: loading,
    error,
    canFetchMore,
    fetchMore,
  } = useInfiniteProjects();

  const handleMoreClick = () => {
    return fetchMore();
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

      {pages?.map((projects, index) => (
        <React.Fragment key={index}>
          <ProjectList projects={projects} />
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
