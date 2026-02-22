# Chuck Norris Infinite Jokes

An infinite-scrolling web app that displays random Chuck Norris jokes from the [Chuck Norris API](https://api.chucknorris.io/).

## Features

- 🎯 Infinite scroll - jokes load automatically as you scroll down
- 🔄 Unique jokes only - no duplicate jokes shown
- 📱 Responsive design using Tailwind CSS
- ⚡ Optimized with throttled scroll handling
- 🎨 Clean and modern UI with hover effects

## Demo

Simply open `index.html` in your browser to start seeing Chuck Norris jokes!

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/SzaBee13/chuck-norris-jokes.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chuck-norris-jokes
   ```

3. Open `index.html` in your browser:
   - Double-click the file, or
   - Use a local server (e.g., `python -m http.server` or Live Server extension in VS Code)

## Usage

- The page automatically loads jokes when you open it
- Scroll down to load more jokes automatically
- Each joke is unique - duplicates are filtered out
- Resize your browser window and jokes will load to fill the viewport

## Technologies Used

- **HTML5** - Structure
- **Tailwind CSS** - Styling via CDN
- **JavaScript (ES6+)** - Functionality
- **Chuck Norris API** - Joke data source

## How It Works

1. Fetches jokes from the Chuck Norris API (`https://api.chucknorris.io/jokes/random`)
2. Tracks joke IDs to prevent duplicates
3. Loads 3 jokes at a time when scrolling near the bottom
4. Uses throttling to optimize performance
5. Automatically fills the viewport on load and resize

## API Reference

This project uses the free Chuck Norris API. No API key required.

- **Endpoint**: `https://api.chucknorris.io/jokes/random`
- **Documentation**: [Chuck Norris API Docs](https://api.chucknorris.io/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## Acknowledgments

- Chuck Norris API for providing the jokes
- Tailwind CSS for the styling framework
