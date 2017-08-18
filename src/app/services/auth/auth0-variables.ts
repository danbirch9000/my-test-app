interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'lGYegv04mhYn0lTILyPqM9xaIEuNS_DM',
  domain: 'code82.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
