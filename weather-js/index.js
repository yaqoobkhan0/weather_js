let i = 0;

const weatherDataHandler = () => {
  if (i < 4) {
    let citiesTable = document.getElementsByClassName("xr");
    let cityName = `${citiesTable[i].innerHTML}`;
    fetch(
      `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let weatherTable = document.getElementById("weatherTable");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = cityName;
        let td2 = document.createElement("td");
        td2.innerHTML = `<textarea>${data.description}</textarea>`;
        let td3 = document.createElement("td");
        td3.innerHTML = data.temp_in_celsius;
        let td4 = document.createElement("td");
        td4.innerHTML = data.humidity_in_percent;
        let td5 = document.createElement("td");
        const presenthour = new Date().getHours();
        td5.innerHTML = presenthour - new Date(data.date_and_time).getHours();
        let td6 = document.createElement("td");
        let btn12 = document.createElement("button");
        btn12.innerText = "Delete";
        td6.appendChild(btn12);
        btn12.classList.add("jb");
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        weatherTable.appendChild(tr);
        btn12.addEventListener("click", () => {
          remove(tr);
        });
        citiesTable[i - 1].classList.add("pg");
        let nodata = document.getElementById("nodata");
        nodata.classList.add("kg");
      });
  } else {
    return;
  }
  i++;
};

const remove = (e) => {
  e.remove();
};

const find = () => {
  let input1 = document.getElementById("inp").value;
  let tr = document.getElementsByTagName("tr");
  if (input1 === "London") {
    tr[1].classList.add("bg");
  } else if (input1 === "New York") {
    tr[2].classList.add("bg");
  } else if (input1 === "Los Angeles") {
    tr[3].classList.add("bg");
  } else if (input1 === "Las Vegas") {
    tr[4].classList.add("bg");
  } else {
    return;
  }
};
