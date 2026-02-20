let mockUser: { name: string; email: string } | null = null;

export const login = (user: { name: string; email: string }) => {
  mockUser = user;
};

export const logout = () => {
  mockUser = null;
};

export const isLoggedIn = () => !!mockUser;

export const getUser = () => mockUser;
