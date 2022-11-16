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
  description: "",
  storyImg: "",
  category: "",
  viewsCount: "",
  totalMinutesToRead: "",
  postedOn: "",
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
  reason: "",
  reportedOn: "",
};

//Report User Schema
const ReportUser = {
  id: "",
  //User id of the person reporting the other user
  userId: "",
  //Person who is being reported
  reportedUser: "",
  reason: "",
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
