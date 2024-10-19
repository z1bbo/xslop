function getFocussedTweet() {
  const tweets = document.querySelectorAll('article[role="article"][data-testid="tweet"]');
  for (let tweet of tweets) {
    const rect = tweet.getBoundingClientRect();
    if (rect.top > 15) {
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
  if (document.fullscreenElement) {
    return;
  }
  if ((window.location.pathname === "/home" || window.location.pathname === "/search")
    && event.key === 'f'
    && !['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)
    && event.target.contentEditable != 'true'
  ) {
    event.preventDefault();
    markUninterested();
  }
});