const { MockList } = require("apollo-server");

// Generage Mock data -> using apollo inbuild Mock Generator 
const mocks = {
  Query: () => ({
    // trackForHome: () => [mocks.Track],
    trackForHome: () => new MockList([6,9])
  }),
  Track: () => ({
    id: () => "tack_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => ({
      name: () => "Grumpy Cat",
      photo: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
    }),
    thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1020,
    modulesCount: () => 6,
  })
}

module.exports = mocks;