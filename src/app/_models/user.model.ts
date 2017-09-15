export class User {
    _id: string;
    avatar: File;
    userName: string;
    displayName: string;
    password: string;
    email: string;
    counter: {
      beats: number,
      followers: number,
      friends: number
    };
    followers: string[];
    friends: string[];
}
export class File {
  _id: string;
  filename: string;
}
