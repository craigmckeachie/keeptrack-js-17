import { projectAPI } from './projectAPI';
import { useQuery } from 'react-query';

export function useProjects() {
  const {
    data: projects,
    isLoading: loading,
    error,
  } = useQuery('projects', () => projectAPI.get(1));

  return { projects, loading, error, setCurrentPage: () => {} };
}
