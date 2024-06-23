function getFocussedTweet() {
  const tweets = document.querySelectorAll('article[role="article"]');
  for (let tweet of tweets) {
    const rect = tweet.getBoundingClientRect();
    if (rect.top > 10) {
      return tweet;
    }
  }
  return null;
}

async function markUninterested() {
  var tweet = getFocussedTweet();
  if (tweet) {
    tweet.querySelector('button[data-testid="caret"]').click();
    for (let i = 0; i < 10; ++i) {
      await new Promise(resolve => setTimeout(resolve, 20));
      var notInterested = document.querySelector('div[role="menuitem"][tabindex="0"]')
      if (notInterested) {
        notInterested.click();
        break;
      }
    }
  }
}

document.addEventListener('keydown', function(event) {
  if (window.location.pathname === "/home" && event.key === 'f'
    && !['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)
  ) {
    event.preventDefault();
    markUninterested();
  }
});