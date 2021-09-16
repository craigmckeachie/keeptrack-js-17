import { pageSize, projectAPI } from './projectAPI';
// import { Project } from './Project';
import { useInfiniteQuery, useMutation } from 'react-query';
import { queryCache } from '../index';

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
      // onSuccess: () => queryCache.refetchQueries('projects'),
      onError: (error, variables, context) => {
        // An error happened!
        console.log('error', error);
      },
      onSuccess: (data, variables, context) => {
        // Boom baby!
        console.log('success', data);
        queryCache.refetchQueries('projects');
      },
      onSettled: (data, error, variables, context) => {
        // Error or success... doesn't matter!
      },
    }
  );
}
