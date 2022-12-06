// User Schema
const User = {
  id: "",
  username: "",
  email: "",
  password: "",
  profileImg: "",
  coverImg: "",
  bio: "",
  interests: [],
  createdAt: "",
};

const Admin = {
  id: "",
  username: "",
  email: "",
  password: "",
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
  username: "",
  storyId: "",
  description: "",
  reportedOn: "",
  status: "", // Pending Review, Awaiting Response, Resolved
};

//Report User Schema
const ReportUser = {
  id: "",
  //User id of the person reporting the other user
  userId: "",
  username: "",
  //Id of Person who is being reported
  reportedUserId: "",
  reportedUserName: "",
  description: "",
  attachments: "",
  status: "", // Pending Review, Awaiting Response, Resolved
  reportedOn: "",
};

//Requests Schema
const Request = {
  id: "",
  email: "",
  username: "",
  description: "",
  attachments: "",
  status: "", //Response Pending , Resolved
  createdOn: "",
};

// Stores all the Banned User emails so that they cannot create new account using same email
const RestrictedUser = {
  id: "",
  email: "",
  restrictedOn: "",
};

const Response = {
  id: "",
  sendTo: "", //email of the receiver
  attachments: "",
  subject: "",
  text: "",
  respondedAt: "",
};
