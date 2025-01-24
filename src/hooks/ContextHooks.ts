import { DbContext } from '../contexts/DbContext';
import { useContext } from 'react';

const useDbContext = () => {
  const context = useContext(DbContext);
  if (!context) {
    throw new Error('useDbContext must be used within a DbProvider');
  }
  return context;
};

export { useDbContext };