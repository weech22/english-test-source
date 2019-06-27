import A from "./A.mp3";
import B from "./B.mp3";

export default [
  {
    type: "Listening",
    task:
      "You will hear people talking in eight different situations. For the following questions, choose the best answer (A, B or C).",
    audio: A,
    questions: [
      {
        text:
          "You hear a message on a telephone answering machine. Why is the speaker calling?",
        options: [
          "To confirm some arrangements",
          "To issue an invitation",
          "To persuade someone to do something"
        ],
        key: 1
      },
      {
        text:
          "You hear two people talking about a water-sports centre. The man says the centre should...",
        options: [
          "pay more attention to safety.",
          "offer activities for small children.",
          "provide all the equipment needed."
        ],
        key: 1
      },
      {
        text:
          "You hear a professional tennis player talking about her career. What annoys her most about interviewers?",
        options: [
          "Their belief that she leads a glamorous life",
          "Their assumption that she’s motivated by money",
          "Their tendency to disturb her while she’s travelling"
        ],
        key: 0
      },
      {
        text: "You hear a poet talking about his work. What is he doing?",
        options: [
          "Giving his reasons for starting to visit schools",
          "Justifying the childlike nature of some of his recent poems",
          "Explaining that his poems appeal to people of different ages"
        ],
        key: 2
      },
      {
        text:
          "You hear two people talking about a programme they saw on TV. The woman thinks the programme was...",
        options: ["irritating.", "sad.", "uninformative."],
        key: 2
      },
      {
        text:
          "You hear two people talking about an ice-hockey game they’ve just seen. How does the girl feel about it?",
        options: [
          "Pleased to have had the experience",
          "Relieved that she’d dressed appropriately",
          "Impressed by the performance of the team"
        ],
        key: 0
      },
      {
        text:
          "You overhear two friends talking about a restaurant. What do they both like about it?",
        options: [
          "The presentation of the food",
          "The atmosphere of the place",
          "The originality of the cooking"
        ],
        key: 0
      },
      {
        text:
          "You hear a man talking on the radio. What type of information is he giving?",
        options: [
          "A travel announcement",
          "A weather forecast",
          "An accident report"
        ],
        key: 0
      }
    ]
  },
  {
    type: "Listening",
    task:
      "You will hear part of a radio interview with a woman called Rachel Reed, who works in a commercial art gallery, a shop which sells works of art. For the following questions, choose the best answer (A, B or C).",
    audio: B,
    questions: [
      {
        text: "What does Rachel say about her job title?",
        options: [
          "It makes her feel more important than she is.",
          "It gives people the wrong idea about her work.",
          "It is appropriate for most of the work she does."
        ],
        key: 2
      },
      {
        text:
          "What is the most common reason for the gallery not exhibiting an artist’s work?",
        options: [
          "The subject matter is unsuitable.",
          "It is not of a high enough quality.",
          "The gallery manager doesn’t like it."
        ],
        key: 1
      },
      {
        text: "When can phone calls from artists be difficult for Rachel?",
        options: [
          "When their work doesn’t sell.",
          "When they don’t receive payments.",
          "When their work is not accepted."
        ],
        key: 2
      },
      {
        text: "Why does Rachel include a commentary in the catalogue?",
        options: [
          "It gives background information about the artist.",
          "It encourages people to buy paintings over the phone.",
          "It tells people what experts think of the work."
        ],
        key: 0
      },
      {
        text: "What does Rachel say about administrative work?",
        options: [
          "She is able to leave a lot of it to others.",
          "She would like to have an assistant to help with it.",
          "She finds it hard to get it all organised."
        ],
        key: 0
      },
      {
        text:
          "What is Rachel’s role in the service the gallery offers to large companies?",
        options: [
          "Making initial contacts.",
          "Responding to enquiries.",
          "Promoting a certain type of art."
        ],
        key: 0
      },
      {
        text: "What does Rachel find most enjoyable about her job?",
        options: [
          "Meeting interesting people.",
          "The fact that it’s unpredictable.",
          "Being close to works of art."
        ],
        key: 1
      }
    ]
  }
];
