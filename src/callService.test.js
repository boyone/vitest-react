import { expect, it, vi } from 'vitest';
import CallService from './CallService';
vi.mock('./CallService');

it('mock CallService', async () => {
  const mockUsers = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
  ];
  CallService = vi.fn(() => mockUsers);

  const users = CallService('https://jsonplaceholder.typicode.com/users');

  expect(users.length).toBe(2);
});
