// Sample song data (mock data for demonstration)
const songDatabase = [
    {
        id: 1,
        title: "Midnight Dreams",
        artist: "Luna Echo",
        genre: "lo-fi",
        mood: "chill",
        duration: "3:45",
        views: 5240,
        likes: 892,
        plays: 1203,
        date: new Date("2024-01-15")
    },
    {
        id: 2,
        title: "Electric Nights",
        artist: "Neon Pulse",
        genre: "electronic",
        mood: "energetic",
        duration: "4:12",
        views: 8921,
        likes: 1540,
        plays: 2104,
        date: new Date("2024-01-14")
    },
    {
        id: 3,
        title: "Rainy Sunday",
        artist: "Soft Melodies",
        genre: "indie",
        mood: "sad",
        duration: "3:28",
        views: 3421,
        likes: 654,
        plays: 782,
        date: new Date("2024-01-13")
    },
    {
        id: 4,
        title: "Cosmic Journey",
        artist: "Space Sounds",
        genre: "ambient",
        mood: "uplifting",
        duration: "5:10",
        views: 12340,
        likes: 2103,
        plays: 3456,
        date: new Date("2024-01-12")
    },
    {
        id: 5,
        title: "Summer Vibes",
        artist: "Golden Hour",
        genre: "pop",
        mood: "happy",
        duration: "3:52",
        views: 15670,
        likes: 2845,
        plays: 4123,
        date: new Date("2024-01-11")
    },
    {
        id: 6,
        title: "Rock Anthem",
        artist: "Thunder Road",
        genre: "rock",
        mood: "energetic",
        duration: "4:35",
        views: 9876,
        likes: 1876,
        plays: 2456,
        date: new Date("2024-01-10")
    },
    {
        id: 7,
        title: "Jazz Night",
        artist: "Blue Notes",
        genre: "jazz",
        mood: "chill",
        duration: "4:22",
        views: 4567,
        likes: 923,
        plays: 1234,
        date: new Date("2024-01-09")
    },
    {
        id: 8,
        title: "Dark Whispers",
        artist: "Shadow",
        genre: "electronic",
        mood: "dark",
        duration: "3:58",
        views: 6789,
        likes: 1234,
        plays: 1876,
        date: new Date("2024-01-08")
    },
    {
        id: 9,
        title: "City Lights",
        artist: "Urban Echo",
        genre: "hip-hop",
        mood: "energetic",
        duration: "3:33",
        views: 10234,
        likes: 2104,
        plays: 2876,
        date: new Date("2024-01-07")
    },
    {
        id: 10,
        title: "Classical Beauty",
        artist: "Harmony",
        genre: "classical",
        mood: "uplifting",
        duration: "5:45",
        views: 7654,
        likes: 1432,
        plays: 2103,
        date: new Date("2024-01-06")
    },
    {
        id: 11,
        title: "Deep House",
        artist: "Bass Masters",
        genre: "electronic",
        mood: "chill",
        duration: "6:12",
        views: 8932,
        likes: 1654,
        plays: 2345,
        date: new Date("2024-01-05")
    },
    {
        id: 12,
        title: "Morning Light",
        artist: "Sunrise",
        genre: "pop",
        mood: "happy",
        duration: "3:41",
        views: 5432,
        likes: 987,
        plays: 1432,
        date: new Date("2024-01-04")
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const genreFilter = document.getElementById('genreFilter');
const moodFilter = document.getElementById('moodFilter');
const sortBy = document.getElementById('sortBy');
const clearBtn = document.getElementById('clearBtn');
const resultsContainer = document.getElementById('resultsContainer');
const resultsCount = document.getElementById('resultsCount');
const loadingSpinner = document.getElementById('loadingSpinner');

let currentResults = [];

// Event Listeners
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

genreFilter.addEventListener('change', performSearch);
moodFilter.addEventListener('change', performSearch);
sortBy.addEventListener('change', performSearch);
clearBtn.addEventListener('click', clearSearch);

// Main search function
function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const genre = genreFilter.value;
    const mood = moodFilter.value;
    const sortOption = sortBy.value;

    // Show loading state
    showLoading();

    // Simulate API call delay
    setTimeout(() => {
        let results = songDatabase.filter(song => {
            const matchesQuery = query === '' ||
                song.title.toLowerCase().includes(query) ||
                song.artist.toLowerCase().includes(query) ||
                song.genre.toLowerCase().includes(query);

            const matchesGenre = genre === '' || song.genre === genre;
            const matchesMood = mood === '' || song.mood === mood;

            return matchesQuery && matchesGenre && matchesMood;
        });

        // Apply sorting
        results = sortResults(results, sortOption);
        currentResults = results;

        displayResults(results);
        hideLoading();

        // Show/hide clear button
        if (query || genre || mood) {
            clearBtn.style.display = 'inline-block';
        }
    }, 300);
}

// Sort results based on selected option
function sortResults(results, sortOption) {
    const sorted = [...results];

    switch(sortOption) {
        case 'newest':
            sorted.sort((a, b) => b.date - a.date);
            break;
        case 'popular':
            sorted.sort((a, b) => b.likes - a.likes);
            break;
        case 'views':
            sorted.sort((a, b) => b.views - a.views);
            break;
        case 'relevance':
        default:
            // Keep original order (relevance)
            break;
    }

    return sorted;
}

// Display results
function displayResults(results) {
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results"><p>🎵 No songs found. Try different search terms!</p></div>';
        resultsCount.textContent = '0 results found';
        return;
    }

    resultsCount.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} found`;

    results.forEach(song => {
        const songCard = createSongCard(song);
        resultsContainer.appendChild(songCard);
    });
}

// Create a song card element
function createSongCard(song) {
    const card = document.createElement('div');
    card.className = 'song-card';

    const formattedDate = song.date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    card.innerHTML = `
        <div class="song-header">
            <div class="song-cover">🎵</div>
            <div class="song-info">
                <div class="song-title">${escapeHtml(song.title)}</div>
                <div class="song-artist">by ${escapeHtml(song.artist)}</div>
                <div style="font-size: 0.8em; color: #909090; margin-top: 3px;">${formattedDate}</div>
            </div>
        </div>

        <div class="song-meta">
            <span class="badge genre">${capitalizeFirst(song.genre)}</span>
            <span class="badge mood">${capitalizeFirst(song.mood)}</span>
            <span class="badge">${song.duration}</span>
        </div>

        <div class="song-stats">
            <div class="stat">
                <div class="stat-value">${formatNumber(song.views)}</div>
                <div class="stat-label">Views</div>
            </div>
            <div class="stat">
                <div class="stat-value">${formatNumber(song.likes)}</div>
                <div class="stat-label">Likes</div>
            </div>
            <div class="stat">
                <div class="stat-value">${formatNumber(song.plays)}</div>
                <div class="stat-label">Plays</div>
            </div>
        </div>

        <div class="song-actions">
            <button class="action-btn play-btn" onclick="playSong(${song.id})">▶️ Play</button>
            <button class="action-btn share-btn" onclick="shareSong(${song.id})">📤 Share</button>
        </div>
    `;

    return card;
}

// Clear search
function clearSearch() {
    searchInput.value = '';
    genreFilter.value = '';
    moodFilter.value = '';
    sortBy.value = 'relevance';
    clearBtn.style.display = 'none';
    resultsContainer.innerHTML = '<div class="no-results"><p>🔍 Start searching to discover songs</p></div>';
    resultsCount.textContent = '0 results found';
    currentResults = [];
}

// Show loading spinner
function showLoading() {
    loadingSpinner.style.display = 'flex';
    resultsContainer.innerHTML = '';
}

// Hide loading spinner
function hideLoading() {
    loadingSpinner.style.display = 'none';
}

// Play song (mock function)
function playSong(songId) {
    const song = songDatabase.find(s => s.id === songId);
    if (song) {
        alert(`🎵 Now playing: "${song.title}" by ${song.artist}\n\n(This is a demo - integrate with actual audio player)`);
        // In a real app, you would play the song here
    }
}

// Share song (mock function)
function shareSong(songId) {
    const song = songDatabase.find(s => s.id === songId);
    if (song) {
        const shareText = `Check out "${song.title}" by ${song.artist} on Suno! 🎵`;
        if (navigator.share) {
            navigator.share({
                title: song.title,
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(shareText);
            alert('Song link copied to clipboard!');
        }
    }
}

// Utility functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add some initial content on load
window.addEventListener('load', () => {
    resultsContainer.innerHTML = '<div class="no-results"><p>🔍 Start searching to discover songs</p></div>';
});
