const messageList = [
  {
      image: "https://code.s3.yandex.net/web-code/card__image.jpg",
      text: "Hola, ¡tenemos que configurar nuestro chat lo antes posible!"
  },
  {
      image: "https://code.s3.yandex.net/web-code/card__image-lake.jpg",
      text: "¡Ahora podemos crear tantas tarjetas como necesitemos!"
  },
];

class Card {
constructor(data, cardSelector) {
  this._text = data.text;
  this._image = data.image;
  this._cardSelector = cardSelector;
}

_getTemplate() {
  const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector(".card")
    .cloneNode(true);

  return cardElement;
}
generateCard() {
  this._element = this._getTemplate();

  this._element.querySelector(".card__avatar").src = this._image;
  this._element.querySelector(".card__paragraph").textContent = this._text;

  return this._element;
}
}

messageList.forEach((item) => {
const card = new Card(item, ".card-template_type_default");
const cardElement = card.generateCard();

document.body.append(cardElement);
});