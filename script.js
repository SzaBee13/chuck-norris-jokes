const jokesContainer = document.getElementById("jokes-container");
const loadingElement = document.getElementById("loading");
let isLoading = false;
let throttleTimer;
const seenJokeIds = new Set();

function createJokeCard(jokeText) {
  const card = document.createElement("div");
  card.className =
    "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow";
  card.innerHTML = `
        <p class="text-gray-800">${jokeText}</p>
    `;
  return card;
}

async function fetchJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  return { id: data.id, value: data.value };
}

async function fetchUniqueJokes(count) {
  const jokes = [];
  let attempts = 0;
  const maxAttempts = count * 10; // avoid infinite loop if API keeps returning same items

  while (jokes.length < count && attempts < maxAttempts) {
    attempts++;
    try {
      const joke = await fetchJoke();
      if (!seenJokeIds.has(joke.id)) {
        seenJokeIds.add(joke.id);
        jokes.push(joke);
      }
    } catch (err) {
      console.error("Error fetching joke:", err);
      // If a fetch fails, break to avoid long retries — the outer loadMoreJokes will handle errors.
      break;
    }
  }

  return jokes;
}

async function loadMoreJokes() {
  if (isLoading) return;

  isLoading = true;
  loadingElement.classList.remove("hidden");

  try {
    // Load 3 unique jokes at a time
    const jokes = await fetchUniqueJokes(3);

    jokes.forEach((joke) => {
      const card = createJokeCard(joke.value);
      jokesContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading jokes:", error);
  } finally {
    isLoading = false;
    loadingElement.classList.add("hidden");

    // If the page still isn't tall enough to scroll, load more automatically.
    // Schedule next load on next tick to avoid deep recursion.
    if (document.documentElement.scrollHeight <= window.innerHeight) {
      setTimeout(() => {
        loadMoreJokes();
      }, 0);
    }
  }
}

function handleScroll() {
  if (throttleTimer) return;

  throttleTimer = setTimeout(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const scrollThreshold = document.documentElement.scrollHeight - 200;

    if (scrollPosition >= scrollThreshold) {
      loadMoreJokes();
    }
    throttleTimer = null;
  }, 500);
}

loadMoreJokes();
window.addEventListener("scroll", handleScroll);
// Also handle resize so new viewport sizes trigger loading if necessary
window.addEventListener("resize", () => {
  if (document.documentElement.scrollHeight <= window.innerHeight - 100) {
    loadMoreJokes();
  }
});