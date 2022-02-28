//get Data from senate.json

$(document).ready(function () {
  //función anónima
  cargarJson();
  function cargarJson() {
    //será la responsable de cargar Json
    //declarar variables
    let senateDataHtml = ""; //guardar la data del Json en formato de tabla(html)
    // getJson para obtener la data del archivo senate.js
    $.getJSON("senate.json", function (senateData) {
      //declaración del cuerpo de la función anónima
      let counterRepublicans = 0;
      let counterDemocrats = 0;
      let counterIndependents = 0;
      let sumRepublicans = 0;
      let sumDemocrats = 0;
      let sumIndependent = 0;
      for (var i = 0; i < senateData.results[0].members.length; i++) {
        if (senateData.results[0].members[i].party == "R") {
          sumRepublicans =
            sumRepublicans +
            senateData.results[0].members[i].votes_with_party_pct;
          counterRepublicans++;
        } else if (senateData.results[0].members[i].party == "D") {
          sumDemocrats =
            sumDemocrats +
            senateData.results[0].members[i].votes_with_party_pct;
          counterDemocrats++;
        } else {
          sumIndependent =
            sumIndependent +
            senateData.results[0].members[i].votes_with_party_pct;
          counterIndependents++;
        }
        senateDataHtml += "<tr>";
        senateDataHtml +=
          "<td>" + senateData.results[0].members[i].id + "</td>";
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
      let averageDemocrats = 0;
      let averageRepublicans = 0;
      let averageIndependents = 0;
      averageDemocrats = sumDemocrats / counterDemocrats;
      averageRepublicans = sumRepublicans / counterRepublicans;
      averageIndependents = sumIndependent / counterIndependents;
      if (isNaN(averageDemocrats)) averageIndependents = 0.0;
      if (isNaN(averageRepublicans)) averageIndependents = 0.0;
      if (isNaN(averageIndependents)) averageIndependents = 0.0;
      const tableContent = `
        <tr>
          <td> Democreats </td>
          <td> ${counterDemocrats} </td>
          <td> % ${averageDemocrats.toFixed(2)} </td>
        </tr>
        <tr>
          <td> Republicans </td>
          <td> ${counterRepublicans} </td>
          <td> % ${averageRepublicans.toFixed(2)} </td>
        </tr>
        <tr>
          <td> Independents </td>
          <td> ${counterIndependents} </td>
          <td> % ${averageIndependents.toFixed(2)} </td>
        </tr>       
      `;
      $("#" + "senateTable").html(tableContent);
      $("#" + "totalMembersSenate").html(`
      Total Senate Members ${senateData.results[0].members.length}
      `);
      $("#" + "senateId").html(senateDataHtml);
    });
  }
});

//get Data from senate.json

$(document).ready(function () {
  //función anónima
  cargarJson();
  function cargarJson() {
    //será la responsable de cargar Json
    //declarar variables
    let houseDataHtml = ""; //guardar la data del Json en formato de tabla(html)
    // getJson para obtener la data del archivo senate.js
    let houseDataTotal = "";
    let counterRepublicans = 0;
    let counterDemocrats = 0;
    let counterIndependents = 0;
    let sumRepublicans = 0;
    let sumDemocrats = 0;
    let sumIndependent = 0;
    $.getJSON("house.json", function (houseData) {
      for (var i = 0; i < houseData.results[0].members.length; i++) {
        if (houseData.results[0].members[i].party == "R") {
          sumRepublicans =
            sumRepublicans +
            houseData.results[0].members[i].votes_with_party_pct;
          counterRepublicans++;
        } else if (houseData.results[0].members[i].party == "D") {
          sumDemocrats =
            sumDemocrats + houseData.results[0].members[i].votes_with_party_pct;
          counterDemocrats++;
        } else {
          console.log("INDEPENDIENTES");
          sumIndependent =
            sumIndependent +
            houseData.results[0].members[i].votes_with_party_pct;
          counterIndependents++;
        }
        houseDataHtml += "<tr>";
        houseDataHtml += "<td>" + houseData.results[0].members[i].id + "</td>";
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
      let averageDemocrats = 0;
      let averageRepublicans = 0;
      let averageIndependents = 0;
      averageDemocrats = sumDemocrats / counterDemocrats;
      averageRepublicans = sumRepublicans / counterRepublicans;
      averageIndependents = sumIndependent / counterIndependents;
      if (isNaN(averageDemocrats)) averageIndependents = 0.0;
      if (isNaN(averageRepublicans)) averageIndependents = 0.0;
      if (isNaN(averageIndependents)) averageIndependents = 0.0;
      const tableContent = `
        <tr>
          <td> Democreats </td>
          <td> ${counterDemocrats} </td>
          <td> % ${averageDemocrats.toFixed(2)} </td>
        </tr>
        <tr>
          <td> Republicans </td>
          <td> ${counterRepublicans} </td>
          <td> % ${averageRepublicans.toFixed(2)} </td>
        </tr>
        <tr>
          <td> Independents </td>
          <td> ${counterIndependents} </td>
          <td> % ${
            averageIndependents !== NaN ? averageIndependents : 0.0
          } </td>
        </tr>       
      `;
      $("#" + "houseId").html(houseDataHtml);
      $("#" + "totalMembersHouse").html(
        `Total House Members ${houseData.results[0].members.length ?? 0}`
      );
      $("#" + "houseTable").html(tableContent);
      $("#qhouse").html(houseDataTotal);
    });
  }
});
