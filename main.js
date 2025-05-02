// Sample data for stories
const stories = [
    { username: 'travel_lover', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=150&h=150&fit=crop' },
    { username: 'foodie_adventures', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150&h=150&fit=crop' },
    { username: 'nature_photography', image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=150&h=150&fit=crop' },
    { username: 'fitness_motivation', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&h=150&fit=crop' },
    { username: 'fashion_style', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=150&h=150&fit=crop' },
    { username: 'tech_enthusiast', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&h=150&fit=crop' },
    { username: 'art_and_design', image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=150&h=150&fit=crop' },
    { username: 'music_lover', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&h=150&fit=crop' },
    { username: 'bookworm', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150&h=150&fit=crop' },
    { username: 'pet_lover', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=150&h=150&fit=crop' }
];

// Sample data for posts
const posts = [
    {
        username: 'travel_lover',
        userImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=50&h=50&fit=crop',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&h=500&fit=crop',
        likes: 1234,
        caption: 'Exploring the beautiful beaches of Bali! 🌴✨ #travel #bali #paradise',
        comments: 89,
        location: 'Bali, Indonesia'
    },
    {
        username: 'foodie_adventures',
        userImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=50&h=50&fit=crop',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop',
        likes: 2345,
        caption: 'Homemade pizza night! 🍕 Made with love and fresh ingredients. #foodie #homemade #pizza',
        comments: 156,
        location: 'My Kitchen'
    },
    {
        username: 'nature_photography',
        userImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=50&h=50&fit=crop',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=500&fit=crop',
        likes: 3456,
        caption: 'Morning mist in the mountains. Nature never fails to amaze me. 🌄 #nature #photography #mountains',
        comments: 234,
        location: 'Rocky Mountains'
    }
];

// Sample data for suggestions
const suggestions = [
    { username: 'fitness_motivation', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=50&h=50&fit=crop', relation: 'Followed by travel_lover' },
    { username: 'fashion_style', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=50&h=50&fit=crop', relation: 'New to Instagram' },
    { username: 'tech_enthusiast', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=50&h=50&fit=crop', relation: 'Followed by foodie_adventures' },
    { username: 'art_and_design', image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=50&h=50&fit=crop', relation: 'Followed by nature_photography' },
    { username: 'music_lover', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=50&h=50&fit=crop', relation: 'Followed by fitness_motivation' },
    { username: 'bookworm', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=50&h=50&fit=crop', relation: 'New to Instagram' },
    { username: 'pet_lover', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=50&h=50&fit=crop', relation: 'Followed by fashion_style' }
];

// Function to create story elements
function createStories() {
    const storiesContainer = document.querySelector('.flex.space-x-4');
    stories.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.className = 'flex flex-col items-center';
        storyElement.innerHTML = `
            <div class="story-circle">
                <img src="${story.image}" alt="${story.username}">
            </div>
            <span class="text-xs mt-1">${story.username}</span>
        `;
        storiesContainer.appendChild(storyElement);
    });
}

// Function to create post elements
function createPosts() {
    const postsContainer = document.querySelector('.md\\:col-span-2');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${post.userImage}" alt="${post.username}" class="rounded-full">
                <div class="flex flex-col">
                    <span class="font-semibold">${post.username}</span>
                    <span class="text-xs text-gray-500">${post.location}</span>
                </div>
                <div class="ml-auto">
                    <i class="fas fa-ellipsis-h text-gray-500"></i>
                </div>
            </div>
            <img src="${post.image}" alt="Post" class="post-image">
            <div class="post-actions">
                <div class="flex space-x-4">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-paper-plane"></i>
                </div>
                <i class="far fa-bookmark"></i>
            </div>
            <div class="post-likes">${post.likes.toLocaleString()} likes</div>
            <div class="post-caption">
                <span class="font-semibold">${post.username}</span> ${post.caption}
            </div>
            <div class="post-comments px-4 py-2 text-sm text-gray-500">
                View all ${post.comments} comments
            </div>
            <div class="post-time px-4 pb-4 text-xs text-gray-400">
                ${Math.floor(Math.random() * 24)} HOURS AGO
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Function to create suggestion elements
function createSuggestions() {
    const suggestionsContainer = document.querySelector('.text-sm');
    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'flex items-center justify-between py-2';
        suggestionElement.innerHTML = `
            <div class="flex items-center space-x-3">
                <img src="${suggestion.image}" alt="${suggestion.username}" class="rounded-full w-8 h-8">
                <div>
                    <p class="font-semibold text-sm">${suggestion.username}</p>
                    <p class="text-gray-500 text-xs">${suggestion.relation}</p>
                </div>
            </div>
            <button class="text-blue-500 text-xs font-semibold">Follow</button>
        `;
        suggestionsContainer.appendChild(suggestionElement);
    });
}

// Add event listeners for like buttons
function addLikeListeners() {
    document.querySelectorAll('.post-actions .fa-heart').forEach(heart => {
        heart.addEventListener('click', function () {
            this.classList.toggle('far');
            this.classList.toggle('fas');
            this.classList.toggle('text-red-500');
        });
    });
}

// Stories functionality
document.addEventListener('DOMContentLoaded', function () {
    const nextStoriesBtn = document.querySelector('.next-stories-btn');
    const hiddenStories = document.querySelector('.hidden-stories');
    const storiesContainer = document.querySelector('.stories-container');
    const storyCircles = document.querySelectorAll('.story-circle');

    if (nextStoriesBtn && hiddenStories) {
        // Click handler for next stories button
        nextStoriesBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            hiddenStories.classList.toggle('show');
        });

        // Hide hidden stories when clicking outside
        document.addEventListener('click', function (event) {
            if (!hiddenStories.contains(event.target) &&
                !nextStoriesBtn.contains(event.target)) {
                hiddenStories.classList.remove('show');
            }
        });

        // Touch interactions
        let touchStartX = 0;
        let touchEndX = 0;
        let isScrolling = false;

        storiesContainer.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
            isScrolling = false;
        });

        storiesContainer.addEventListener('touchmove', function (e) {
            isScrolling = true;
        });

        storiesContainer.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            if (!isScrolling) {
                handleSwipe();
            }
        });

        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            if (swipeDistance < -50) {
                // Swipe left
                hiddenStories.classList.add('show');
            } else if (swipeDistance > 50) {
                // Swipe right
                hiddenStories.classList.remove('show');
            }
        }

        // Smooth scrolling for stories
        let isDown = false;
        let startX;
        let scrollLeft;

        storiesContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - storiesContainer.offsetLeft;
            scrollLeft = storiesContainer.scrollLeft;
        });

        storiesContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        storiesContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        storiesContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - storiesContainer.offsetLeft;
            const walk = (x - startX) * 2;
            storiesContainer.scrollLeft = scrollLeft - walk;
        });

        // Add hover effect for story circles
        storyCircles.forEach(circle => {
            circle.addEventListener('mouseenter', () => {
                circle.style.transform = 'scale(1.05)';
            });

            circle.addEventListener('mouseleave', () => {
                circle.style.transform = 'scale(1)';
            });
        });
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    createStories();
    createPosts();
    createSuggestions();
    addLikeListeners();
}); 