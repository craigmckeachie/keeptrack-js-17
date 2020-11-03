import { pageSize, projectAPI } from './projectAPI';
// import { Project } from './Project';
import { useInfiniteQuery } from 'react-query';

export function useInfiniteProjects() {
  return useInfiniteQuery('projects', (key, page = 1) => projectAPI.get(page), {
    getFetchMore: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === pageSize;
      if (!morePagesExist) return false;
      return allGroups.length + 1;
    },
  });
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
