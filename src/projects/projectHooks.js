import { projectAPI } from './projectAPI';
// import { Project } from './Project';
import { usePaginatedQuery } from 'react-query';

export function useProjects(page) {
  return usePaginatedQuery(['projects', page], () => projectAPI.get(page));
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(undefined);

  // useEffect(() => {
  //   async function loadProjects() {
  //     setError(undefined);
  //     setLoading(true);
  //     try {
  //       const data = await projectAPI.get(currentPage);
  //       if (currentPage === 1) {
  //         setProjects(data);
  //       } else {
  //         setProjects((projects) => [...projects, ...data]);
  //       }
  //     } catch (e) {
  //       setError(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadProjects();
  // }, [currentPage]);

  // return [projects, loading, error, setCurrentPage];
}

export function useSaveProject(project) {
  // function saveProject(project) {
  //   projectAPI
  //     .put(project)
  //     .then((updatedProject) => {
  //       let updatedProjects = projects.map((p) => {
  //         return p.id === project.id ? new Project(updatedProject) : p;
  //       });
  //       setProjects(updatedProjects);
  //     })
  //     .catch((e) => {
  //       setError(e.message);
  //     });
  // }
}
