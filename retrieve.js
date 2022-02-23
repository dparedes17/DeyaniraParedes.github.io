//get Data from senate.json

$(document).ready(function () //función anónima
{
  cargarJson();
  function cargarJson() {
    //será la responsable de cargar Json
    //declarar variables
    let senateDataHtml = ""; //guardar la data del Json en formato de tabla(html)
    // getJson para obtener la data del archivo senate.js
    $.getJSON("senate.json", function (senateData) {
      //declaración del cuerpo de la función anónima
      console.log(senateData); //ya se creó un array con los datos del Json
      console.log(senateData.results[0].num_results);
      console.log(senateData.results[0].members.length);
      for (var i = 0; i < senateData.results[0].members.length; i++) {
        console.log(senateData.results[0].members[i].id);

        //senateDataHtml += 5;
        //senateDataHtml= senateDataHtml+5
        senateDataHtml += "<tr>";
        senateDataHtml +=
          "<td>" + senateData.results[0].members[i].id + "</td>";
        //
        if (senateData.results[0].members[i].middle_name != null) {
          senateDataHtml +=
            "<td>" +
            senateData.results[0].members[i].first_name +
            " " +
            senateData.results[0].members[i].middle_name +
            " " +
            senateData.results[0].members[i].last_name +
            "</td>";
        } else {
          senateDataHtml +=
            "<td>" +
            senateData.results[0].members[i].first_name +
            " " +
            senateData.results[0].members[i].last_name +
            "</td>";
        }

        senateDataHtml +=
          "<td>" + senateData.results[0].members[i].party + "</td>";

        senateDataHtml +=
          "<td>" + senateData.results[0].members[i].state + "</td>";

        senateDataHtml +=
          "<td>" + senateData.results[0].members[i].seniority + "</td>";

        senateDataHtml +=
          "<td>" +
          senateData.results[0].members[i].votes_with_party_pct +
          "</td>";

        senateDataHtml += "</tr>";
      }
      $("#" + "senateId").html(senateDataHtml);
    });
  }
});

//get Data from senate.json

$(document).ready(function () //función anónima
{
  cargarJson();
  function cargarJson() {
    //será la responsable de cargar Json
    //declarar variables
    let houseDataHtml = ""; //guardar la data del Json en formato de tabla(html)
    // getJson para obtener la data del archivo senate.js
    $.getJSON("house.json", function (houseData) {
      //declaración del cuerpo de la función anónima
      console.log(houseData); //ya se creó un array con los datos del Json
      console.log(houseData.results[0].num_results);
      console.log(houseData.results[0].members.length);
      for (var i = 0; i < houseData.results[0].members.length; i++) {
        console.log(houseData.results[0].members[i].id);

        //houseDataHtml += 5;
        //houseDataHtml= houseDataHtml+5
        houseDataHtml += "<tr>";
        houseDataHtml += "<td>" + houseData.results[0].members[i].id + "</td>";
        //
        if (houseData.results[0].members[i].middle_name != null) {
          houseDataHtml +=
            "<td>" +
            houseData.results[0].members[i].first_name +
            " " +
            houseData.results[0].members[i].middle_name +
            " " +
            houseData.results[0].members[i].last_name +
            "</td>";
        } else {
          houseDataHtml +=
            "<td>" +
            houseData.results[0].members[i].first_name +
            " " +
            houseData.results[0].members[i].last_name +
            "</td>";
        }

        houseDataHtml +=
          "<td>" + houseData.results[0].members[i].party + "</td>";

        houseDataHtml +=
          "<td>" + houseData.results[0].members[i].state + "</td>";

        houseDataHtml +=
          "<td>" + houseData.results[0].members[i].seniority + "</td>";

        houseDataHtml +=
          "<td>" +
          houseData.results[0].members[i].votes_with_party_pct +
          "</td>";

        houseDataHtml += "</tr>";
      }
      $("#" + "houseId").html(houseDataHtml);
    });
  }
});
