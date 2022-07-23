export interface ImageData {
  id: string;
  url: string;
  description: string;
  likes: any;
}

export interface UserDetails {
  username: string;
  userId: string;
  userBio: string;
  profileImageUrl: string;
  images: ImageData[];
  followers: Array<string>;
  followings: Array<string>;
  imageCategories: Array<string>;
}
