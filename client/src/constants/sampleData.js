export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Santosh Kumar",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Anil Kumar",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Santosh Kumar",
    _id: "1",
  },

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Anil Kumar",
    _id: "2",
  },
];

export const sampleNotification = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Santosh Kumar",
    },

    _id: "1",
  },

  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Anil Kumar",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "asdsad",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Luck ka message hai",
    _id: "sfnssndnscjecc",
    sender: {
      _id: "user._id",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdsadsd",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "Luck 2 ka message hai",
    _id: "sfnsdjkfsdnfkjsbnd",
    sender: {
      _id: "sfdsdfsdf",
      name: "Aman",
    },
    chat: "chatId",
    createdAt: "2024-03-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "johm_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "Johney Mark",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "Johney_mark",
      friends: 10,
      groups: 7,
    },
  ],

  chats: [
    {
      name: "Fukre Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Deo",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      },
    },
    {
      name: "Gareeb Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Johney Mark",
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Bhai ka Message hai",
      _id: "sanfkcascndj",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "sanfkcascndjasnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman 2",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
