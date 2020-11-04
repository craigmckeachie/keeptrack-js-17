import { pageSize, projectAPI } from './projectAPI';
// import { Project } from './Project';
import { useInfiniteQuery, useMutation, queryCache } from 'react-query';

export function useInfiniteProjects() {
  return useInfiniteQuery('projects', (key, page = 1) => projectAPI.get(page), {
    getFetchMore: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === pageSize;
      if (!morePagesExist) return false;
      return allGroups.length + 1;
    },
  });
}

export function useSaveProject() {
  return useMutation(
    (project) => {
      return projectAPI.put(project);
    },
    {
      onSuccess: () => queryCache.refetchQueries('projects'),
    }
  );
}
