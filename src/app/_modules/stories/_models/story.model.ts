export class Story {
    _id: string;
    story: string;
    more: string;
    composeDate: Date;
    user: User;
}
export class User {
  id: string;
  displayName: string;
}
