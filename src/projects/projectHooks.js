import { useState, useEffect } from 'react';
import { projectAPI } from './projectAPI';
import { Project } from './Project';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadProjects() {
      setError(undefined);
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  function saveProject(project) {
    projectAPI
      .put(project)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p) => {
          return p.id === project.id ? new Project(updatedProject) : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
        setError(e.message);
      });
  }

  return [projects, loading, error, setCurrentPage, saveProject];
}
