import { projectAPI } from './projectAPI';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';

export function useProjects() {
  const [page, setPage] = useState(0);

  const {
    isLoading: loading,
    isError,
    error,
    data: projects,
    isFetching,
  } = useQuery(['projects', page], () => projectAPI.get(page), {
    keepPreviousData: true,
    staleTime: 5000,
  });

  return {
    projects,
    loading,
    isError,
    error,
    isFetching,
    setPage,
  };
}

export function useSaveProject() {
  const queryClient = useQueryClient();
  return useMutation((project) => projectAPI.put(project), {
    onSuccess: () => queryClient.invalidateQueries('projects'),
  });
}

// setCurrentPage,
//     saving,
//     savingError,
//     saveProject,
