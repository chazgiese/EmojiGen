var emojiSets = []
var randomEmojis = []
var emojiBox = document.querySelector('#emoji-box')
var genButton = document.querySelector('#button-gen')

function emojiGen() {
  var i
  for (i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * emojiBook.length)
    if ( i === 1 ) {
      randomEmojis += emojiBook[randomIndex] + '<br>'
    } else {
      randomEmojis += emojiBook[randomIndex]
    }
  }
  emojiSets.unshift(randomEmojis)
  randomEmojis = '';
}

genButton.onclick = function() {
  emojiBox.classList.add('hide')
  emojiGen()

  setTimeout(function() {
    emojiBox.innerHTML = emojiSets[0]
    emojiBox.classList.remove('hide')
  }, 150);
}

console.log("If you're having errors I feel bad for you son, I got 99 problems but this log ain't one")
