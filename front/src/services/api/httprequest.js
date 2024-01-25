import axios from "axios";

export async function getAll() {
  let meals;
  await axios.get("http://localhost:7070/api/meals").then(res => {
    meals = res.data;
  });
  return meals;
}

export async function getById(id) {
  let meal;
  await axios.get(`http://localhost:7070/api/meals/${id}`).then((res) => {
    meal = res.data;
  });
  return meal;
}

export async function postData(payload) {
  let newData;
  await axios.post("http://localhost:7070/api/meals", payload).then(res => {
    newData = res.data;
  });
  return newData;
}

export async function deleteById(id) {
  let deletedMeal;
  await axios.delete(`http://localhost:7070/api/meals/${id}`).then(res => {
    deletedMeal = res.data;
  });
  return deletedMeal
}