export interface UserData {
  email: string;
  password: string;
}
export const mapToUserData = function (user: UserData): UserData {
  return {
    email: user.email,
    password: user.password
  };
}
