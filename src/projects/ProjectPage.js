import React, { useEffect, useState } from 'react';
import { useAuth } from '../account/useAuth';
import { projectAPI } from './projectAPI';
import ProjectDetail from './ProjectDetail';

function ProjectPage(props) {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  const id = Number(props.match.params.id);
  // const id = 5;
  const auth = useAuth();

  useEffect(() => {
    setLoading(true);
    projectAPI
      .find(id, auth.getToken())
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id, auth]);

  return (
    <div>
      <h1>Project Detail</h1>

      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span> {error}
              </p>
            </section>
          </div>
        </div>
      )}

      {project && <ProjectDetail project={project} />}
    </div>
  );
}

export default ProjectPage;
