const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input-CEP");
const textCEP = document.querySelector("#cepResponse");

btnSearch.addEventListener("click", () => {
  const requestHTTP = new XMLHttpRequest();
  requestHTTP.responseType = "json";

  requestHTTP.onreadystatechange = () => {
    if (requestHTTP.readyState === 4) {
      const responseHTTP = requestHTTP.response;

      var row = document.querySelector("#tableCEP");
      row.innerHTML = [
        `<thead>`,
        `<tr>`,
        `</tr>`,
        `</thead>`,
        `<tbody>`,
        `<tr>`,
        `<td>CEP</td>`,
        `<td>${responseHTTP.cep}</td>`,
        `</tr>`,
        `<tr>`,
        `<td>LOGRADOURO</td>`,
        `<td>${responseHTTP.logradouro}</td>`,
        `</tr>`,
        `<tr>`,
        `<td>COMPLEMENTO</td>`,
        `<td>${responseHTTP.complemento}</td>`,
        `</tr>`,
        `<tr>`,
        `<td>BAIRRO</td>`,
        `<td>${responseHTTP.bairro}</td>`,
        `</tr>`,
        `<tr>`,
        `<td>LOCALIDADE</td>`,
        `<td>${responseHTTP.localidade}</td>`,
        `</tr>`,
        `<tr>`,
        `<td>UF</td>`,
        `<td>${responseHTTP.uf}</td>`,
        `</tr>`,
        `<tr>`,
        `<td>IBGE</td>`,
        `<td>${responseHTTP.ibge}</td>`,
        `</tr>`,
        `<tr>`,
        `<td>DDD</td>`,
        `<td>${responseHTTP.ddd}</td>`,
        `</tr>`,
        `<tr>`,
        `<td>SIAFI</td>`,
        `<td>${responseHTTP.siafi}</td>`,
        `</tr>`,
      ].join("\n");

    }
  };

  requestHTTP.open(
    "GET",
    `https://viacep.com.br/ws/${inputSearch.value}/json/`
  );

  requestHTTP.send();
});
