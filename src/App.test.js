import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders to-do heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /to-do/i })).toBeInTheDocument();
});

test('test button logs never tell me the odds', async () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<App />);

  await userEvent.click(screen.getByRole('button', { name: /^test$/i }));

  expect(logSpy).toHaveBeenCalledWith('Never tell me the odds');
  logSpy.mockRestore();
});
