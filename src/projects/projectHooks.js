import { pageSize, projectAPI } from './projectAPI';
// import { Project } from './Project';
import { useInfiniteQuery, useMutation, queryCache } from 'react-query';

export function useInfiniteProjects() {
  let totalCount = 0;
  let currentPage = 0;
  return useInfiniteQuery(
    'projects',
    (key, page = 1) =>
      projectAPI.get(page).then((results) => {
        currentPage = page;
        totalCount = results.totalCount;
        return results.data;
      }),

    {
      getFetchMore: (lastGroup, allGroups) => {
        const morePagesExist = lastGroup?.length === pageSize;
        // const lastPage = Math.ceil(totalCount / pageSize);
        // const morePagesExist = currentPage !== lastPage;
        if (!morePagesExist) return false;
        return allGroups.length + 1;
      },
    }
  );
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
