import { expect, it, vi } from 'vitest';
import CallService from './CallService';
import ky from 'ky';

vi.mock('ky'); // mock ky

it('mock ky module so CallService should return 2 users', async () => {
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

  ky.get.mockReturnValue({
    json() {
      return mockUsers;
    },
  });

  const users = await CallService('https://jsonplaceholder.typicode.com/users');

  expect(users.length).toBe(2);
});
