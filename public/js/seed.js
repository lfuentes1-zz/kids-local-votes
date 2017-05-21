window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const attractions = [
    {
      id: 1,
      title: 'San Antonio Zoo',
      description: 'The 35-acre zoo has a collection of over 3,500 animals representing 750 species.',
      url: '#',
      attractionImageUrl: 'images/attractions/image-sanantoniozoo.png',
      votes: generateVoteCount(),
      lastVoteAvatarUrl: 'images/avatars/daniel.jpg',
      lastVoteName: 'Daniel',
    },
    {
      id: 2,
      title: 'Kiddie Park',
      description: 'Classic children’s amusement park with an old-school carousel & Ferris wheel, a snack bar & parties.',
      url: '#',
      attractionImageUrl: 'images/attractions/image-kiddieparklogo.png',
      votes: generateVoteCount(),
      lastVoteAvatarUrl: 'images/avatars/kristy.png',
      lastVoteName: 'Kristy',
    },
    {
      id: 3,
      title: 'Sea World - San Antonio',
      description: 'SeaWorld San Antonio is a 250-acre marine mammal park, oceanarium, and animal theme park.',
      url: '#',
      attractionImageUrl: 'images/attractions/image-seaworldsalogo.png',
      votes: generateVoteCount(),
      lastVoteAvatarUrl: 'images/avatars/veronika.jpg',      
      lastVoteName: 'Veronika',
    },
    {
      id: 4,
      title: 'Six Flags - Fiesta Texas',
      description: 'San Antonios biggest, most popular themed attraction featuring dozens of thrill rides, shows, and activities.',
      url: '#',
      attractionImageUrl: 'images/attractions/image-sixflagssa.png',
      votes: generateVoteCount(),
      lastVoteAvatarUrl: 'images/avatars/molly.png',
      lastVoteName: 'Molly',
    },
    {
      id: 5,
      title: 'The DoSeum',
      description: '3-story museum promoting learning & discovery through interactive exhibits & creative programs.',
      url: '#',
      attractionImageUrl: 'images/attractions/image-thedoseum.png',
      votes: generateVoteCount(),
      lastVoteAvatarUrl: 'images/avatars/justen.jpg',
      lastVoteName: 'Justen',      
    },
    {
      id: 6,
      title: 'Witte Museum',
      description: 'Museum featuring scientific and historical exhibits for the whole family.',
      url: '#',
      attractionImageUrl: 'images/attractions/image-wittemuseumlogo.jpg',
      votes: generateVoteCount(),
      lastVoteAvatarUrl: 'images/avatars/Steve.jpg',
      lastVoteName: 'Steve',      
    },
  ];

  return { attractions: attractions };
}());
