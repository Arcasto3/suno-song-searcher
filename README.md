# 🎵 Suno Song Searcher

A beautiful, responsive web application to search and discover AI-generated songs from Suno.com.

## Features

✨ **Search Functionality**
- Search songs by title, artist, or genre
- Real-time search results
- Filter by genre and mood
- Sort by relevance, newest, popularity, or views

🎨 **Modern UI Design**
- Dark mode with gradient aesthetics
- Smooth animations and transitions
- Responsive grid layout
- Beautiful song cards with metadata

📊 **Song Information**
- Display title, artist, and date
- Show genre and mood badges
- Display stats (views, likes, plays)
- Duration information

🎮 **Interactive Features**
- Play button to listen to songs
- Share functionality
- Clear all filters button
- Loading spinner for search feedback

## Quick Start

1. **Download or clone the files**
   ```bash
   git clone https://github.com/yourusername/suno-song-searcher.git
   cd suno-song-searcher
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - No installation or build process required!

## File Structure

```
suno-song-searcher/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Search logic and interactivity
└── README.md       # This file
```

## How to Use

1. **Search**: Type a song title, artist name, or genre in the search box
2. **Filter**: Use the dropdown filters to narrow results by:
   - Genre (Pop, Rock, Hip-Hop, Electronic, etc.)
   - Mood (Happy, Chill, Energetic, Sad, etc.)
3. **Sort**: Choose how to sort results (Relevance, Newest, Popular, Most Viewed)
4. **Interact**: 
   - Click "Play" to listen to a song
   - Click "Share" to share with others
   - Click "Clear All" to reset filters

## Current Features

### Sample Data
The application includes 12 sample songs for demonstration. Replace the `songDatabase` in `script.js` with real Suno API data.

### Filter Options
- **Genres**: Pop, Rock, Hip-Hop, Electronic, Indie, Jazz, Classical, Lo-Fi, Ambient
- **Moods**: Energetic, Chill, Sad, Happy, Dark, Uplifting

### Sort Options
- Relevance (default)
- Newest First
- Most Popular
- Most Viewed

## Customization

### Adding Real API Data
To integrate with Suno's actual API:

1. Update the `performSearch()` function in `script.js`
2. Replace mock data fetch with actual API calls:
   ```javascript
   const response = await fetch('https://api.suno.com/search', {
       method: 'POST',
       headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
       body: JSON.stringify({ query, genre, mood })
   });
   ```

### Styling
- Modify colors in `styles.css`
- Adjust the gradient: `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`
- Change accent colors: `#ff006e` (pink), `#3a86ff` (blue), `#8338ec` (purple)

### Adding More Filters
Add new filter selects in `index.html` and update the filter logic in `script.js`:
```javascript
const matchesNewFilter = newFilter === '' || song.newProperty === newFilter;
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations, Gradients
- **JavaScript (Vanilla)**: No dependencies required

## Future Enhancements

- [ ] Integration with Suno API
- [ ] User authentication and saved playlists
- [ ] Trending songs section
- [ ] Advanced filters (duration, year released, etc.)
- [ ] Audio player integration
- [ ] Dark/Light theme toggle
- [ ] Song recommendations
- [ ] User ratings and reviews

## Notes

- This is a demo version with sample data
- Replace sample data in `songDatabase` with real Suno API responses
- For production use, implement proper error handling and authentication
- Consider adding backend service for API requests

## License

MIT License - Feel free to use and modify!

## Support

Need help? Check the comments in the source code or submit an issue!

---

**Made with ❤️ for music lovers**
