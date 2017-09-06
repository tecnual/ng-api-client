export class User {
    _id: string;
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
