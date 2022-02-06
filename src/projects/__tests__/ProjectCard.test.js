import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Project } from '../Project';
import ProjectCard from '../ProjectCard';
import { MemoryRouter } from 'react-router-dom';

describe('<ProjectCard />', () => {
  let project;
  let handleEdit;

  beforeEach(() => {
    project = new Project({
      id: 1,
      name: 'Mission Impossible',
      description: 'This is really difficult',
      budget: 100,
    });
    handleEdit = jest.fn();
    render(
      <MemoryRouter>
        <ProjectCard project={project} onEdit={handleEdit} />
      </MemoryRouter>
    );
  });

  test('should do something', () => {
    expect(
      screen.getByRole('heading', {
        name: /mission impossible/i,
      })
    ).toHaveTextContent(project.name);
    expect(
      screen.getByText(/this is really difficult\.\.\./i)
    ).toHaveTextContent(project.description);
    screen.getByText(/budget : 100/i);
  });

  it('handler called when edit clicked', () => {
    // this query works screen.getByText(/edit/i)
    // but using role is better

    userEvent.click(screen.getByRole('button'));
    expect(handleEdit).toBeCalledTimes(1);
    expect(handleEdit).toBeCalledWith(project);
  });
});
