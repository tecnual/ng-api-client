export class Story {
    _id: string;
    story: string;
    more: string;
    composeDate: Date;
    user: User;
    files: File[];
}
export class User {
  id: string;
  displayName: string;
  avatar: File;
}

export class File {
  _id: string;
  filename: string;
  path: string;
  size: number;
  destination: string;
  mimetype: string;
}
