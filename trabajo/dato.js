const date = new Date;

var dato = fetch('http://localhost:3000/api/dates/')
    .then(res => res.json())
    .then((data)=> {
      if (data != null) {
        document.getElementById('showDate').innerHTML = `<div id="showDate">
        <img src="${data.imagen}" alt="" >
      </div>`
      }
    });