const register = require('../Controller/registerController');
const Userdb = require('../Model/UserModel');

// Mock Express req and res objects
const createMockRequest = (body) => ({ body });
const createMockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

jest.mock('../Model/UserModel');

describe('register function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should register a new user', async () => {
    // Mock findOne to return null (no existing user)
    Userdb.findOne.mockResolvedValue(null);

    // Mock create to resolve with a new user object
    const newUser = { _id: 'someUserId', ...req.body };
    Userdb.create.mockResolvedValue(newUser);

    const req = createMockRequest({
      name: 'Test User',
      email: 'test1@example.com',
      password: 'password123',
      roles: ['user'],
    });
    const res = createMockResponse();

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ success: 'New user Test User test@example.com created!' });
    expect(Userdb.findOne).toHaveBeenCalledWith({ email: 'test1@example.com' });
    expect(Userdb.create).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test1@example.com',
      password: expect.any(String), // Password hash
      roles: ['user'],
    });
  });

  it('should handle an existing user', async () => {
    // Mock findOne to return an existing user
    Userdb.findOne.mockResolvedValue({});

    const req = createMockRequest({
      name: 'Test User',
      email: 'test1@example.com',
      password: 'password123',
      roles: ['user'],
    });
    const res = createMockResponse();

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({ error: 'This email already in use' });
    expect(Userdb.findOne).toHaveBeenCalledWith({ email: 'test1@example.com' });
    expect(Userdb.create).not.toHaveBeenCalled();
  });

  it('should handle missing required fields', async () => {
    // Mock findOne to return null (no existing user)
    Userdb.findOne.mockResolvedValue(null);

    const req = createMockRequest({
      name: 'Test User',
      email: 'test@example.com',
      password: '', // Missing password
      roles: ['user'],
    });
    const res = createMockResponse();

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Please fill all the required fields' });
    expect(Userdb.findOne).not.toHaveBeenCalled();
    expect(Userdb.create).not.toHaveBeenCalled();
  });
});
