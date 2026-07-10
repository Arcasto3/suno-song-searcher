// Suno API Configuration
const SUNO_API_BASE_URL = 'https://api.sunoapi.org/api/v1';
const SUNO_API_KEY = ''; // Add your API key here: https://sunoapi.org

// Sample song data (fallback/mock data for demonstration)
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
        date: new Date("2024-01-15"),
        audioUrl: "https://example.com/songs/midnight-dreams.mp3"
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
        date: new Date("2024-01-14"),
        audioUrl: "https://example.com/songs/electric-nights.mp3"
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
        date: new Date("2024-01-13"),
        audioUrl: "https://example.com/songs/rainy-sunday.mp3"
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
        date: new Date("2024-01-12"),
        audioUrl: "https://example.com/songs/cosmic-journey.mp3"
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
        date: new Date("2024-01-11"),
        audioUrl: "https://example.com/songs/summer-vibes.mp3"
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
        date: new Date("2024-01-10"),
        audioUrl: "https://example.com/songs/rock-anthem.mp3"
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
        date: new Date("2024-01-09"),
        audioUrl: "https://example.com/songs/jazz-night.mp3"
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
        date: new Date("2024-01-08"),
        audioUrl: "https://example.com/songs/dark-whispers.mp3"
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
        date: new Date("2024-01-07"),
        audioUrl: "https://example.com/songs/city-lights.mp3"
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
        date: new Date("2024-01-06"),
        audioUrl: "https://example.com/songs/classical-beauty.mp3"
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
        date: new Date("2024-01-05"),
        audioUrl: "https://example.com/songs/deep-house.mp3"
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
        date: new Date("2024-01-04"),
        audioUrl: "https://example.com/songs/morning-light.mp3"
    },
    {
        id: 13,
        title: "Phonk Nights",
        artist: "Phunk Master",
        genre: "phonk",
        mood: "dark",
        duration: "3:22",
        views: 14523,
        likes: 2987,
        plays: 3876,
        date: new Date("2024-01-16"),
        audioUrl: "https://example.com/songs/phonk-nights.mp3"
    },
    {
        id: 14,
        title: "Street Vibes",
        artist: "Phonk King",
        genre: "phonk",
        mood: "energetic",
        duration: "4:01",
        views: 18765,
        likes: 3421,
        plays: 4567,
        date: new Date("2024-01-17"),
        audioUrl: "https://example.com/songs/street-vibes.mp3"
    },
    {
        id: 15,
        title: "Dark Highway",
        artist: "Phonk Rider",
        genre: "phonk",
        mood: "dark",
        duration: "3:45",
        views: 12456,
        likes: 2654,
        plays: 3456,
        date: new Date("2024-01-18"),
        audioUrl: "https://example.com/songs/dark-highway.mp3"
    },
    {
        id: 16,
        title: "Underground Beat",
        artist: "Phonk Flex",
        genre: "phonk",
        mood: "energetic",
        duration: "3:33",
        views: 16789,
        likes: 3098,
        plays: 4123,
        date: new Date("2024-01-19"),
        audioUrl: "https://example.com/songs/underground-beat.mp3"
    },
    {
        id: 17,
        title: "Midnight Phonk",
        artist: "Trap Phonk",
        genre: "phonk",
        mood: "dark",
        duration: "3:56",
        views: 13421,
        likes: 2876,
        plays: 3765,
        date: new Date("2024-01-20"),
        audioUrl: "https://example.com/songs/midnight-phonk.mp3"
    }
];

let usingRealAPI = false;

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
const downloadModal = document.getElementById('downloadModal');
const toast = document.getElementById('toast');

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

// Main search function with API integration
async function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const genre = genreFilter.value;
    const mood = moodFilter.value;
    const sortOption = sortBy.value;

    // Show loading state
    showLoading();

    try {
        let results;
        
        // Try to use real Suno API if configured
        if (SUNO_API_KEY) {
            results = await searchSunoAPI(query, genre, mood);
            usingRealAPI = true;
        } else {
            // Fallback to mock data
            results = searchMockData(query, genre, mood);
            usingRealAPI = false;
        }

        // Apply sorting
        results = sortResults(results, sortOption);
        currentResults = results;

        displayResults(results);
        hideLoading();

        // Show/hide clear button
        if (query || genre || mood) {
            clearBtn.style.display = 'inline-block';
        }
    } catch (error) {
        console.error('Search error:', error);
        // Fallback to mock data on API error
        const results = searchMockData(query, genre, mood);
        const sorted = sortResults(results, sortOption);
        currentResults = sorted;
        displayResults(sorted);
        hideLoading();
        showToast('⚠️ Using demo data (add API key for real songs)', 'info');
    }
}

// Search Suno API
async function searchSunoAPI(query, genre, mood) {
    try {
        // Suno API endpoint for getting feed/library
        // Note: Suno's API primarily generates music. For searching, we use the feed endpoint
        const response = await fetch(`${SUNO_API_BASE_URL}/feed`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${SUNO_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        let data = await response.json();
        let songs = data.data || data.songs || [];

        // Filter results based on query, genre, and mood
        songs = songs.filter(song => {
            const matchesQuery = query === '' ||
                (song.title && song.title.toLowerCase().includes(query)) ||
                (song.artist && song.artist.toLowerCase().includes(query)) ||
                (song.prompt && song.prompt.toLowerCase().includes(query));

            const matchesGenre = genre === '' || 
                (song.tags && song.tags.includes(genre)) ||
                (song.genre && song.genre.toLowerCase() === genre);

            const matchesMood = mood === '' || 
                (song.mood && song.mood.toLowerCase() === mood) ||
                (song.tags && song.tags.some(tag => tag.toLowerCase().includes(mood)));

            return matchesQuery && matchesGenre && matchesMood;
        });

        // Format Suno API response to match our song structure
        return songs.map((song, index) => ({
            id: song.id || index,
            title: song.title || song.prompt?.substring(0, 50) || 'Untitled',
            artist: song.artist || song.user?.username || 'Unknown Artist',
            genre: song.genre || 'electronic',
            mood: song.mood || 'energetic',
            duration: song.duration_ms ? formatDuration(song.duration_ms) : '3:45',
            views: song.play_count || 0,
            likes: song.like_count || 0,
            plays: song.play_count || 0,
            date: new Date(song.created_at || Date.now()),
            audioUrl: song.audio_url || song.url || '',
            imageUrl: song.image_url || ''
        }));

    } catch (error) {
        console.error('Suno API error:', error);
        showToast('❌ API connection failed, using demo data', 'info');
        return searchMockData(query, genre, mood);
    }
}

// Search mock data
function searchMockData(query, genre, mood) {
    return songDatabase.filter(song => {
        const matchesQuery = query === '' ||
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.genre.toLowerCase().includes(query);

        const matchesGenre = genre === '' || song.genre === genre;
        const matchesMood = mood === '' || song.mood === mood;

        return matchesQuery && matchesGenre && matchesMood;
    });
}

// Format duration from milliseconds
function formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
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
            <button class="action-btn download-btn" onclick="downloadSong(${song.id})">⬇️ Download</button>
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

// Play song
function playSong(songId) {
    const song = currentResults.find(s => s.id === songId) || songDatabase.find(s => s.id === songId);
    if (song) {
        if (song.audioUrl) {
            // Open audio in new window or play inline
            window.open(song.audioUrl, '_blank');
            showToast(`🎵 Playing: ${song.title}`, 'success');
        } else {
            alert(`🎵 Now playing: "${song.title}" by ${song.artist}\n\n(This is a demo - integrate with actual audio player)`);
        }
    }
}

// Download song as MP3
function downloadSong(songId) {
    const song = currentResults.find(s => s.id === songId) || songDatabase.find(s => s.id === songId);
    if (!song) return;

    // Show download modal
    showDownloadModal(song.title);

    // Simulate download with progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        
        updateDownloadProgress(progress);

        if (progress >= 100) {
            clearInterval(progressInterval);
            
            setTimeout(() => {
                closeDownloadModal();
                
                // If real audio URL exists, download it
                if (song.audioUrl) {
                    const link = document.createElement('a');
                    link.href = song.audioUrl;
                    link.download = `${song.title}.mp3`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
                
                showToast(`✅ Downloaded: ${song.title}.mp3`, 'success');
            }, 500);
        }
    }, 200);
}

// Show download progress modal
function showDownloadModal(songTitle) {
    document.getElementById('downloadSongName').textContent = `Downloading: ${escapeHtml(songTitle)}.mp3`;
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('downloadStatus').textContent = '0%';
    downloadModal.style.display = 'flex';
}

// Update download progress
function updateDownloadProgress(percent) {
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('downloadStatus').textContent = Math.round(percent) + '%';
}

// Close download modal
function closeDownloadModal() {
    downloadModal.style.display = 'none';
}

// Share song
function shareSong(songId) {
    const song = currentResults.find(s => s.id === songId) || songDatabase.find(s => s.id === songId);
    if (song) {
        const shareText = `Check out "${song.title}" by ${song.artist} on Suno! 🎵`;
        if (navigator.share) {
            navigator.share({
                title: song.title,
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText);
            showToast('📋 Song link copied to clipboard!', 'info');
        }
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
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
    
    // Check if API is configured
    if (!SUNO_API_KEY) {
        console.log('📝 Tip: Add your Suno API key to enable real song search. Get it at https://sunoapi.org');
    }
});
