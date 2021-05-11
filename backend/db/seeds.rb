Entry.destroy_all
User.destroy_all

user1 = User.create(name: "Anika Bernstein", username: "Anika")

Entry.create(
  date: "05-09-2021",
  user: user1,
  mood: 3,
  meditation: false,
  workout: true,
  social: true,
  creative: false,
  weather: 1,
  sleep: 8
)
Entry.create(
  date: "05-10-2021",
  user: user1,
  mood: 5,
  meditation: true,
  workout: true,
  social: true,
  creative: true,
  weather: 1,
  sleep: 10
)