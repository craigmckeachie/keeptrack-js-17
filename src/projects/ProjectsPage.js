import React from 'react';
import { useProjects } from './projectHooks';
import ProjectList from './ProjectList';

function ProjectsPage() {
  const { projects, loading, error, setCurrentPage } = useProjects();


  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const saveProject = (project) => {
    // projectAPI
    //   .put(project)
    //   .then((updatedProject) => {
    //     let updatedProjects = projects.map((p) => {
    //       return p.id === project.id ? new Project(updatedProject) : p;
    //     });
    //     setProjects(updatedProjects);
    //   })
    //   .catch((e) => {
    //     setError(e.message);
    //   });
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

      <ProjectList projects={projects} onSave={saveProject} />

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
