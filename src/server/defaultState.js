import md5 from "md5";

export const defaultState = {
  // session: {
  //   authenticated: false
  // },
  users: [
    {
      id: "U1",
      name: "Jess",
      passwordHash: md5("NOOPNOOP")
    },
    {
      id: "U2",
      name: "Ness",
      passwordHash: md5("BLACKJACK")
    }
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1"
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1"
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1"
    }
  ],
  tasks: [
    {
      name: "Do tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false
    },
    {
      name: "Something else",
      id: "T2",
      group: "G2",
      owner: "U1",
      isComplete: false
    }
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great work!"
    }
  ]
};
