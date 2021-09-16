import { pageSize, projectAPI } from './projectAPI';
// import { Project } from './Project';
import { useInfiniteQuery, useMutation, useQueryCache } from 'react-query';

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
  const queryCache = useQueryCache();
  return useMutation(
    (project) => {
      return projectAPI.put(project);
    },
    {
      // onSuccess: () => queryCache.refetchQueries('projects'),
      onError: (error, variables, context) => {
        // An error happened!
        console.log('error', error);
      },
      onSuccess: (data, variables, context) => {
        // Boom baby!
        queryCache.refetchQueries('projects');
      },
      onSettled: (data, error, variables, context) => {
        // Error or success... doesn't matter!
      },
    }
  );
}
