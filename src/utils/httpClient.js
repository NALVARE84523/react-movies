const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmJiMmI2OTI5OWJjNTUzNGZmM2YwZWY4ODhjYjJjNyIsInN1YiI6IjYxOTJiNWFlNjNhNjk1MDAyYjIxZWM2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SfW6qNJfSba94xtvr_Y2PVXGOmNEuTcenGVJbNvmY4c",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
