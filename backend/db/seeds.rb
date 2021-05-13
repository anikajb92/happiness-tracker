Entry.destroy_all
User.destroy_all

user1 = User.create(name: "Anika Bernstein")

Entry.create(
  [
    {
    user: user1,
    mood: 6,
    meditation: false,
    workout: true,
    social: true,
    creative: false,
    weather: 3,
    date: "2021-05-09",
    sleep: 8
    },
    {
    user: user1,
    mood: 8,
    meditation: true,
    workout: true,
    social: true,
    creative: true,
    weather: 3,
    date: "2021-05-10",
    sleep: 10
    },
    {
    user: user1,
    mood: 7,
    meditation: false,
    workout: false,
    social: true,
    creative: false,
    weather: 5,
    date: "2021-05-08",
    sleep: 8
    },
    {
    user: user1,
    mood: 7,
    meditation: true,
    workout: true,
    social: true,
    creative: false,
    weather: 4,
    date: "2021-05-11",
    sleep: 10
    },
    {
    user: user1,
    mood: 5,
    meditation: true,
    workout: true,
    social: true,
    creative: true,
    weather: 7,
    date: "2021-05-12",
    sleep: 9
    }
    ]
)