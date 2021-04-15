const $button = document.querySelector("button");
$button.addEventListener("click", (e) => {
  let res = new XMLHttpRequest();
  res.responseType = "json";
  res.open(
    "GET",
    "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
  );
  res.send();
  res.onload = () => {
    let phrase = res.response;

    phrase = {
      quoteText:
        "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom. ",
      quoteAuthor: "Marcel Proust",
      senderName: "",
      senderLink: "",
      quoteLink: "http://forismatic.com/en/3fe08c5b2e/",
    };

    const $div = document.querySelector("#quote-div");

    $div.innerHTML = `
    <div class='quote'>
      <p class='quote-text'>"${phrase.quoteText}"</p>
      <p class='quote-author'>-${phrase.quoteAuthor}</p>
    </div>
    `;
    console.log(phrase);
  };
});
