console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

const message1 = document.querySelector("#example-1");
const message2 = document.querySelector("#example-2");

message1.textContent = "";
message2.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  message1.textContent = "Loading...";
  fetch("http://localhost:3003/weather?address=" + search.value).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        console.log(data?.error);
        message1.textContent = data?.error;
      } else {
        message1.textContent = data?.forecast;
        message2.textContent = data?.location;
        console.log(data);
      }
    });
  });
});
