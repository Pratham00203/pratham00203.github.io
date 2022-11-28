// User Schema
const User = {
  id: "",
  role: "", //User or Admin
  username: "",
  email: "",
  password: "",
  profileImg: "",
  coverImg: "",
  bio: "",
  interests: [],
  createdAt: "",
};

//View Schema
const View = {
  id: "",
  userId: "",
  storyId: "",
  category: "",
  viewedAt: "",
};

//Story Schema
const Story = {
  id: "",
  userId: "",
  username: "",
  userProfileImg: "",
  title: "",
  htmlDescription: "",
  textDescription: "",
  storyImg: "",
  category: "",
  viewsCount: "",
  totalMinutesToRead: "",
  postedOn: "",
  updatedOn: "",
};

//Rating Schema
const Rating = {
  id: "",
  userid: "",
  storyId: "",
  rating: "",
};

//Bookmarks Schema
const Bookmark = {
  id: "",
  userId: "",
  username: "",
  userProfileImg: "",
  title: "",
  description: "",
  storyImg: "",
  category: "",
  bookmarkedOn: "",
};

//Like Schema
const Like = {
  id: "",
  userId: "",
  storyId: "",
  likedAt: "",
};

//Comment Schema
const Comment = {
  id: "",
  parentCommentId: "",
  userId: "",
  storyId: "",
  username: "",
  commentBody: "",
  userProfileImg: "",
  postedOn: "",
};

//Follows Schema
const Follow = {
  id: "",
  followerId: "",
  followingId: "",
  followedOn: "",
};

//Report Story Schema
const ReportStories = {
  id: "",
  userId: "",
  storyId: "",
  description: "",
  reportedOn: "",
  status: "", // Pending Review, Waiting for User Response, Resolved
};

//Report User Schema
const ReportUser = {
  id: "",
  //User id of the person reporting the other user
  userId: "",
  //Person who is being reported
  reportedUser: "",
  description: "",
  attachments: "",
  reportedOn: "",
};

//Requests Schema
const Request = {
  id: "",
  email: "",
  username: "",
  description: "",
  attachments: "",
};

// Stores all the Banned User emails so that they cannot create new account using same email
const RestrictedUser = {
  id: "",
  email: "",
};
