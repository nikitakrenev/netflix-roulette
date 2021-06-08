import { Movie } from "../../entities/movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Pulp Fiction",
    subTitle: "Oscar winning Movie",
    rating: 4.3,
    year: new Date(2004, 1, 1),
    duration: 154,
    cover: "https://ananasposter.ru/image/catalog/poster/film/99/1506.jpg",
    description:
      "Pulp Fiction is a 1994 American neo-noir black comedy crime film\n" +
      "          written and directed by Quentin Tarantino, who conceived it with Roger\n" +
      "          Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim\n" +
      "          Roth, Ving Rhames, and Uma Thurman, it tells several stories of\n" +
      "          criminal Los Angeles. The title refers to the pulp magazines and\n" +
      "          hardboiled crime novels popular during the mid-20th century, known for\n" +
      "          their graphic violence and punchy dialogue.",
    genre: "Action & Adventure",
  },
  {
    id: 2,
    title: "Bohemian Rhapsody",
    subTitle: "Oscar winning Movie",
    rating: 4.6,
    year: new Date(2003, 1, 1),
    duration: 134,
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/91j-ZOIvO1L._AC_SL1500_.jpg",
    description:
      "Bohemian Rhapsody is a 2018 biographical musical drama film directed by Bryan Singer from a screenplay by " +
      "Anthony McCarten, and produced by Graham King and Queen manager Jim Beach. The film tells the story of the " +
      "life of Freddie Mercury, the lead singer of the British rock musical band Queen, from the formation of the " +
      "band up to their 1985 Live Aid performance at the original Wembley Stadium.",
    genre: "Drama, Biography, Music",
  },
  {
    id: 3,
    title: "Kill Bill",
    subTitle: "The 4th film by Quentin Tarantino",
    rating: 4.5,
    year: new Date(1994, 1, 1),
    duration: 111,
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/81j%2BMhDJMcL._SL1500_.jpg",
    description:
      "Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars " +
      "Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, " +
      "and Vivica A. Fox) and their leader, Bill (David Carradine), after they try to kill her and her unborn child. " +
      "Her journey takes her to Tokyo, where she battles the yakuza.",
    genre: "Oscar winning Movie",
  },
  {
    id: 4,
    title: "Avengers: Infinity War",
    subTitle: "Marvel Studios",
    rating: 4.2,
    year: new Date(2014, 1, 1),
    duration: 149,
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._AC_SL1500_.jpg",
    description:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    genre: "Action & Adventure",
  },
  {
    id: 5,
    title: "Inception",
    subTitle: "The dream is real",
    rating: 4.6,
    year: new Date(2003, 1, 1),
    duration: 148,
    cover: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
    description:
      "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.",
    genre: "Action & Adventure",
  },
  {
    id: 6,
    title: "Reservoir dogs",
    subTitle: "The dream is real",
    rating: 4.1,
    year: new Date(1994, 1, 1),
    duration: 98,
    cover: "https://avatars.mds.yandex.net/get-zen_doc/35845/pub_5a37bf23a815f1e851bfed8c_5a37c2ad7425f5d520161421/scale_1200",
    description:
        "In Quentin Tarantino's raw directorial debut, a botched robbery indicates a police informant, and pressure mounts in the aftermath at a warehouse.",
    genre: "Oscar winning Movie",
  },
];
