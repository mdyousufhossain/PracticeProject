const jwt = require('jsonwebtoken');
const generateTokensAndSetCookies = require('../config/tokengenerator'); // Import the function to be tested
 // Import your User model or relevant database setup

// Mock Express.js Response object
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.cookie = jest.fn().mockReturnValue(res);
  return res;
};

describe('generateTokensAndSetCookies', () => {
  it('should generate tokens, set cookies, and return tokens', async () => {
    // Mock user data (adjust as needed)
    const user = new User({
      email: 'test@example.com',
      // other user fields
    });

    // Mock JWT sign function
    jwt.sign = jest.fn().mockReturnValue('mockedToken');

    // Mock user.save() function
    user.save = jest.fn().mockResolvedValue(user);

    const res = mockResponse(); // Create a mock response object

    const tokens = await generateTokensAndSetCookies(res, 'test@example.com', user);

    // Assertions
    expect(jwt.sign).toHaveBeenCalledTimes(2);
    expect(jwt.sign).toHaveBeenCalledWith(
      { email: 'test@example.com' },
      process.env.ACCESS_TOKEN_SECRET_1,
      { expiresIn: '15m' }
    );
    expect(jwt.sign).toHaveBeenCalledWith(
      { email: 'test@example.com' },
      process.env.REFRESH_TOKEN_SECRET_2,
      { expiresIn: '1d' }
    );

    expect(user.refreshToken).toBe('mockedToken');
    expect(user.save).toHaveBeenCalledTimes(1);

    expect(res.cookie).toHaveBeenCalledTimes(1);
    expect(res.cookie).toHaveBeenCalledWith('jwt', 'mockedToken', {
      httpOnly: true,
      sameSite: 'None',
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true, // Uncomment this line if you are using HTTPS in production
    });

    expect(tokens).toEqual({ accessToken: 'mockedToken', refreshToken: 'mockedToken' });
  });
  
  // Add more test cases for error scenarios as needed
});
