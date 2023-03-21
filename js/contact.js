const form = document.getElementById("form");
const result = document.getElementById("result");
const progressBar = document.querySelector(".container__progressbar");
const formGroup = document.querySelectorAll(".form__group");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  let object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  let json = JSON.stringify(object);
  result.innerHTML = "";
  result.className = "";
  removeFormGroupFromDOM("none");    
  progressBar.style.display = "flex";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      await delay(6000);
      progressBar.style.display = "none";
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.add('success');
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.add('error');
      }
    })
    .catch((error) => {
      console.log(error);
      progressBar.style.display = "none";
      result.innerHTML = "Something went wrong!";
      result.classList.add('error');
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.innerHTML = "";
        progressBar.style.display = "none";
        removeFormGroupFromDOM("block");
      }, 5000);
    });
});

const removeFormGroupFromDOM = (visible) => {
  formGroup.forEach(group => {
    group.style.display = visible;
  })
}

const delay = ms => new Promise(res => setTimeout(res, ms));