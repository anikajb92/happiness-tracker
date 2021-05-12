Entry.destroy_all
User.destroy_all

user1 = User.create(name: "Anika Bernstein")

Entry.create(
  date: "09-05-2021",
  user: user1,
  mood: 6,
  meditation: false,
  workout: true,
  social: true,
  creative: false,
  weather: 1,
  sleep: 8
)
Entry.create(
  date: "10-05-2021",
  user: user1,
  mood: 8,
  meditation: true,
  workout: true,
  social: true,
  creative: true,
  weather: 1,
  sleep: 10
)