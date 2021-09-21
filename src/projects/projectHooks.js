import { projectAPI } from './projectAPI';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useProjects() {
  const {
    data: projects,
    isLoading: loading,
    error,
    isFetching: fetching,
  } = useQuery('projects', () => projectAPI.get(1));

  return { projects, loading, error, fetching, setCurrentPage: () => {} };
}

export function useSaveProject() {
  const queryClient = useQueryClient();
  return useMutation((project) => projectAPI.put(project), {
    onSuccess: () => queryClient.refetchQueries('projects'),
  });
}
