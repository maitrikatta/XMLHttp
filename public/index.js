const form = document.getElementsByClassName("form")[0];
const msg = document.getElementById("msg");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const fname = ev.target["fname"].value;
  //   const formData = new FormData();
  //   formData.append("fname", fname);
  const data = [{ fname: fname }];
  const xml = new XMLHttpRequest();

  xml.open("POST", "login");
  xml.setRequestHeader("Content-type", "application/json");
  xml.send(JSON.stringify(data));
  xml.onreadystatechange = () => {
    if (xml.readyState == 4 && xml.status == 200) {
      msg.innerHTML = xml.responseText;
    }
  };
});
