WidgetMetadata = {
  id: "forward.combined.media.lists.en",
  title: "Movie & TV Lists",
  description: "Movie & TV Lists",
  author: "𝓑𝓾𝓽𝓽𝓮𝓻𝓯𝓵𝔂",
  site: "https://for-ward.vercel.app",
  version: "1.5.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  modules: [
    // -------------TMDB Modules-------------
    // --- Popular Modules ---
    {
      title: "TMDB Popular TV Series",
      description: "Trending TV series today",
      requiresWebView: false,
      functionName: "loadTodayHotTV",
      cacheDuration: 3600,
      params: [
        { name: "language", title: "Language", type: "language", value: "en" },
        {
          name: "sort_by",
          title: "Region",
          type: "enumeration",
          enumOptions: [
            { title: "All Regions", value: "" },
            { title: "China", value: "CN" },
            { title: "United States", value: "US" },
            { title: "Korea", value: "KR" },
            { title: "Japan", value: "JP" },
            { title: "United Kingdom", value: "GB" },
            { title: "Thailand", value: "TH" },
            { title: "Italy", value: "IT" },
            { title: "Germany", value: "DE" },
            { title: "Spain", value: "ES" },
            { title: "Russia", value: "RU" },
            { title: "Sweden", value: "SE" },
            { title: "Brazil", value: "BR" },
            { title: "Denmark", value: "DK" },
            { title: "India", value: "IN" },
            { title: "Canada", value: "CA" },
            { title: "Ireland", value: "IE" },
            { title: "Australia", value: "AU" },
            { title: "Saudi Arabia", value: "SA" }
          ],
          value: ""
        },
        { name: "page", title: "Page Number", type: "page" }
      ]
    },
    {
      title: "TMDB Popular Movies",
      description: "Trending movies today",
      requiresWebView: false,
      functionName: "loadTodayHotMovies",
      cacheDuration: 3600,
      params: [
        { name: "language", title: "Language", type: "language", value: "en" },
        {
          name: "sort_by",
          title: "Region",
          type: "enumeration",
          enumOptions: [
            { title: "All Regions", value: "" },
            { title: "China", value: "CN" },
            { title: "United States", value: "US" },
            { title: "Korea", value: "KR" },
            { title: "Japan", value: "JP" },
            { title: "United Kingdom", value: "GB" },
            { title: "Hong Kong", value: "HK" },
            { title: "Taiwan", value: "TW" },
            { title: "Thailand", value: "TH" },
            { title: "Italy", value: "IT" },
            { title: "Germany", value: "DE" },
            { title: "Spain", value: "ES" },
            { title: "Russia", value: "RU" },
            { title: "Sweden", value: "SE" },
            { title: "Brazil", value: "BR" },
            { title: "Denmark", value: "DK" },
            { title: "India", value: "IN" },
            { title: "Canada", value: "CA" },
            { title: "Ireland", value: "IE" },
            { title: "Australia", value: "AU" },
            { title: "Saudi Arabia", value: "SA" }
          ],
          value: ""
        },
        { name: "page", title: "Page Number", type: "page" }
      ]
    },
    // --- Regular Discover Modules ---
    {
      title: "TMDB Top Rated Content",
      description: "Top-rated movies or TV shows (sorted by user rating)",
      requiresWebView: false,
      functionName: "tmdbTopRated",
      cacheDuration: 3600,
      params: [
        {
          name: "type",
          title: "🎭 Type",
          type: "enumeration",
          enumOptions: [
            { title: "Movies", value: "movie" },
            { title: "TV Shows", value: "tv" }
          ],
          value: "movie"
        },
        { name: "language", title: "Language", type: "language", value: "en" },
        { name: "page", title: "Page Number", type: "page" }
      ]
    },
    // --- Streaming Platform Modules ---
    {
      title: "TMDB By Streaming Platform",
      description: "Filter TV content by streaming platform and genre",
      requiresWebView: false,
      functionName: "tmdbDiscoverByNetwork",
      cacheDuration: 3600,
      params: [
        {
          name: "with_networks",
          title: "Streaming Platform",
          type: "enumeration",
          description: "Select a platform to display its TV content",
          value: "",
          belongTo: {
            paramName: "air_status",
            value: ["released", "upcoming", ""],
          },
          enumOptions: [
            { title: "All", value: "" },
            { title: "Tencent", value: "2007" },
            { title: "iQiyi", value: "1330" },
            { title: "Youku", value: "1419" },
            { title: "Bilibili", value: "1605" },
            { title: "MGTV", value: "1631" },
            { title: "Netflix", value: "213" },
            { title: "Disney+", value: "2739" },
            { title: "HBO", value: "49" },
            { title: "HBO Max", value: "3186" },
            { title: "Apple TV+", value: "2552" },
            { title: "Hulu", value: "453" },
            { title: "Amazon Prime Video", value: "1024" },
            { title: "FOX", value: "19" },
            { title: "Paramount+", value: "4330" },
            { title: "TV Tokyo", value: "94" },
            { title: "BBC One", value: "332" },
            { title: "BBC Two", value: "295" },
            { title: "NBC", value: "6" },
            { title: "AMC+", value: "174" },
            { title: "We TV", value: "3732" },
            { title: "Viu TV", value: "2146" },
            { title: "TVB", value: "48" }
          ]
        },
        {
          name: "with_genres",
          title: "🎭 Content Type",
          type: "enumeration",
          description: "Select a content type to filter",
          value: "",
          belongTo: {
            paramName: "air_status",
            value: ["released", "upcoming", ""],
          },
          enumOptions: [
            { title: "All Genres", value: "" },
            { title: "Crime", value: "80" },
            { title: "Animation", value: "16" },
            { title: "Comedy", value: "35" },
            { title: "Drama", value: "18" },
            { title: "Family", value: "10751" },
            { title: "Mystery", value: "9648" },
            { title: "Reality", value: "10764" },
            { title: "Talk Show", value: "10767" },
            { title: "Documentary", value: "99" },
            { title: "Action & Adventure", value: "10759" },
            { title: "Sci-Fi & Fantasy", value: "10765" },
            { title: "War & Politics", value: "10768" }
          ]
        },
        {
          name: "air_status",
          title: "Air Status",
          type: "enumeration",
          description: "Default: Released",
          value: "released",
          enumOptions: [
            { title: "Released", value: "released" },
            { title: "Upcoming", value: "upcoming" },
            { title: "All", value: "" }
          ]
        },
        {
          name: "sort_by",
          title: "🔢 Sort By",
          type: "enumeration",
          description: "Choose content sorting method, Default: Air Date Desc",
          value: "first_air_date.desc",
          enumOptions: [
            { title: "Air Date ↓", value: "first_air_date.desc" },
            { title: "Air Date ↑", value: "first_air_date.asc" },
            { title: "Most Popular", value: "popularity.desc" },
            { title: "Top Rated", value: "vote_average.desc" },
            { title: "Most Voted", value: "vote_count.desc" }
          ]
        },
        { name: "page", title: "Page Number", type: "page" },
        { name: "language", title: "Language", type: "language", value: "en" }
      ]
    },
    // --- Production Company Modules ---
    {
      title: "TMDB By Production Company",
      functionName: "tmdbCompanies",
      cacheDuration: 3600,
      params: [
        {
          name: "with_companies",
          title: "Production Company",
          type: "enumeration",
          value: "",
          description: "Select a company to display its movie content",
          belongTo: {
            paramName: "air_status",
            value: ["released", "upcoming", ""],
          },
          enumOptions: [
            { title: "All", value: "" },
            { title: "Disney", value: "2" },
            { title: "Warner Bros", value: "174" },
            { title: "Columbia", value: "5" },
            { title: "Sony", value: "34" },
            { title: "Universal", value: "33" },
            { title: "Paramount", value: "4" },
            { title: "20th Century", value: "25" },
            { title: "Marvel", value: "420" },
            { title: "Toho", value: "882" },
            { title: "China Film Group", value: "14714" },
            { title: "BBC", value: "3324" },
            { title: "A24", value: "41077" },
            { title: "Blumhouse", value: "3172" },
            { title: "Working Title Films", value: "10163" }
          ]
        },
        {
          name: "with_genres",
          title: "🎭 Content Type",
          type: "enumeration",
          description: "Select a content type to filter",
          value: "",
          belongTo: {
            paramName: "air_status",
            value: ["released", "upcoming", ""],
          },
          enumOptions: [
            { title: "All Genres", value: "" },
            { title: "Adventure", value: "12" },
            { title: "Drama", value: "18" },
            { title: "Action", value: "28" },
            { title: "Animation", value: "16" },
            { title: "History", value: "36" },
            { title: "Comedy", value: "35" },
            { title: "Fantasy", value: "14" },
            { title: "Family", value: "10751" },
            { title: "Horror", value: "27" },
            { title: "Mystery", value: "9648" },
            { title: "Thriller", value: "53" },
            { title: "War", value: "10752" },
            { title: "Romance", value: "10749" },
            { title: "Crime", value: "80" },
            { title: "Science Fiction", value: "878" },
            { title: "Documentary", value: "99" },
            { title: "Western", value: "37" },
            { title: "Music", value: "10402" },
            { title: "TV Movie", value: "10770" }
          ]
        },
        {
          name: "air_status",
          title: "Release Status",
          type: "enumeration",
          description: "Default: Released",
          value: "released",
          enumOptions: [
            { title: "Released", value: "released" },
            { title: "Upcoming", value: "upcoming" },
            { title: "All", value: "" }
          ]
        },
        {
          name: "sort_by",
          title: "🔢 Sort By",
          type: "enumeration",
          description: "Choose content sorting method, Default: Release Date Desc",
          value: "primary_release_date.desc",
          enumOptions: [
            { title: "Release Date ↓", value: "primary_release_date.desc" },
            { title: "Release Date ↑", value: "primary_release_date.asc" },
            { title: "Most Popular", value: "popularity.desc" },
            { title: "Top Rated", value: "vote_average.desc" },
            { title: "Most Voted", value: "vote_count.desc" }
          ]
        },
        { name: "page", title: "Page Number", type: "page" },
        { name: "language", title: "Language", type: "language", value: "en" }
      ]
    },
    // =============Blocker Management Module=============
    {
      title: "TMDB Search and Block",
      description: "Block content by title or genre",
      requiresWebView: false,
      functionName: "searchAndBlock",
      cacheDuration: 0,
      params: [
        {
          name: "block_type",
          title: "🎯 Block Type",
          type: "enumeration",
          description: "Choose the blocking method",
          value: "by_name",
          enumOptions: [
            { title: "By Title", value: "by_name" },
            { title: "By Genre", value: "by_genre" },
            { title: "Manual ID Entry", value: "manual_id" }
          ]
        },
        {
          name: "action",
          title: "🎮 Operation Mode",
          type: "enumeration",
          description: "Choose the operation type",
          value: "search_only",
          enumOptions: [
            { title: "Search Only", value: "search_only" },
            { title: "Search and Block", value: "search_and_block" }
          ]
        },
        {
          name: "query",
          title: "🔍 Title",
          type: "input",
          description: "Enter movie or series name to search (By Title mode)",
          value: "",
          placeholder: "Example: Attack on Titan, South Park"
        },
        {
          name: "genre_name",
          title: "🏷️ Genre Name",
          type: "input",
          description: "Enter the genre you want to block (By Genre mode)",
          value: "",
          placeholder: "Example: Reality, Entertainment, Documentary, Action, Romance"
        },
        {
          name: "language",
          title: "🌐 Search Language",
          type: "enumeration",
          description: "Choose search language (By Title mode)",
          value: "en",
          enumOptions: [
            { title: "Arabic", value: "ar" },
            { title: "English", value: "en-US" },
            { title: "Other Languages", value: "en" }
          ]
        },
        {
          name: "tmdb_id",
          title: "🆔 TMDB ID",
          type: "input",
          description: "Enter TMDB ID to block (Manual Entry mode)",
          value: "",
          placeholder: "Example: 550, 1399"
        },
        {
          name: "media_type",
          title: "🎭 Media Type",
          type: "enumeration",
          description: "Choose media type (Manual Entry mode)",
          value: "tv",
          enumOptions: [
            { title: "TV Show", value: "tv" },
            { title: "Movie", value: "movie" }
          ]
        }
      ]
    },
    {
      title: "TMDB Manage Blocked Content",
      description: "View and manage blocked content and genres",
      requiresWebView: false,
      functionName: "manageBlockedItems",
      cacheDuration: 0,
      params: [
        {
          name: "manage_type",
          title: "📂 Management Type",
          type: "enumeration",
          description: "Choose the type of blocked items to manage",
          value: "items",
          enumOptions: [
            { title: "Blocked Content", value: "items" },
            { title: "Blocked Genres", value: "genres" }
          ]
        },
        {
          name: "action",
          title: "📋 Operation",
          type: "enumeration",
          description: "Choose the desired operation",
          value: "view",
          enumOptions: [
            { title: "View List", value: "view" },
            { title: "Clear List", value: "clear" },
            { title: "Unblock", value: "unblock" },
            { title: "Export Settings", value: "export" },
            { title: "Import Settings", value: "import" }
          ]
        },
        {
          name: "unblock_id",
          title: "🔓 Unblock ID",
          type: "input",
          description: "Enter ID to unblock",
          value: "",
          placeholder: "Content ID Example: 2190 | Genre ID Example: 10764",
          belongTo: { paramName: "action", value: ["unblock"] }
        },
        {
          name: "unblock_media_type",
          title: "🎭 Media Type",
          type: "enumeration",
          description: "Choose media type (for blocked content only)",
          value: "tv",
          enumOptions: [
            { title: "TV Show", value: "tv" },
            { title: "Movie", value: "movie" }
          ],
          belongTo: { paramName: "action", value: ["unblock"], paramName2: "manage_type", value2: ["items"] }
        },
        {
          name: "import_data",
          title: "📥 Import Data",
          type: "input",
          description: "Paste a list of IDs to block, supports multiple formats",
          value: "",
          placeholder: "Supported formats: 550,1399 or '550','1399' or \"550\",\"1399\"",
          belongTo: { paramName: "action", value: ["import"] }
        }
      ]
    }
  ]
};

// ===============Blocker Configuration===============
const GENRE_STORAGE_KEY = "forward_blocked_genres";
const STORAGE_KEY = "forward_blocked_items";

const TMDB_GENRE_MAPPING = {
  "Reality": 10764,
  "Talk Show": 10767,
  "Entertainment": 10764,
  "Documentary": 99,
  "Action & Adventure": 10759,
  "Animation": 16,
  "Comedy": 35,
  "Crime": 80,
  "Drama": 18,
  "Family": 10751,
  "Kids": 10762,
  "Mystery": 9648,
  "News": 10763,
  "Sci-Fi & Fantasy": 10765,
  "Soap": 10766,
  "War & Politics": 10768,
  "Western": 37,
  "Action": 28,
  "Adventure": 12,
  "History": 36,
  "Fantasy": 14,
  "Horror": 27,
  "Music": 10402,
  "Romance": 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  "Thriller": 53,
  "War": 10752
};


const REVERSE_GENRE_MAPPING = Object.fromEntries(
  Object.entries(TMDB_GENRE_MAPPING).map(([name, id]) => [id, name])
);

let blockedIdCache = null;
let blockedGenresCache = null;
let blockedItemsCache = null;
let tmdbGenresCache = null;

function clearAllCaches() {
  blockedIdCache = null;
  blockedGenresCache = null;
  blockedItemsCache = null;
  tmdbGenresCache = null;
}

function clearBlockedIdCache() {
  blockedIdCache = null;
}

function clearBlockedGenresCache() {
  blockedGenresCache = null;
}

function clearBlockedItemsCache() {
  blockedItemsCache = null;
}


function getBlockedIdSet() {
  try {
    if (blockedIdCache) {
      return blockedIdCache;
    }

    const blockedItems = getBlockedItems();
    const idSet = new Set();

    for (let i = 0; i < blockedItems.length; i++) {
      const item = blockedItems[i];
      const idStr = String(item.id);
      const idNum = parseInt(item.id);

      idSet.add(idStr + "_" + item.media_type);
      idSet.add(idNum + "_" + item.media_type);

      idSet.add(idStr);
      idSet.add(idNum);
    }

    blockedIdCache = idSet;
    return idSet;
  } catch (error) {
    return new Set();
  }
}

function getBlockedGenres() {
  try {
    if (blockedGenresCache) {
      return blockedGenresCache;
    }

    const stored = Widget.storage.get(GENRE_STORAGE_KEY);
    blockedGenresCache = stored ? JSON.parse(stored) : [];
    return blockedGenresCache;
  } catch (error) {
    return [];
  }
}

function saveBlockedGenres(genres) {
  try {
    Widget.storage.set(GENRE_STORAGE_KEY, JSON.stringify(genres));
    blockedGenresCache = genres;
    clearBlockedIdCache();
    return true;
  } catch (error) {
    return false;
  }
}

function getBlockedItems() {
  try {
    if (blockedItemsCache) {
      return blockedItemsCache;
    }

    const stored = Widget.storage.get(STORAGE_KEY);
    blockedItemsCache = stored ? JSON.parse(stored) : [];
    return blockedItemsCache;
  } catch (error) {
    return [];
  }
}

function saveBlockedItems(items) {
  try {
    Widget.storage.set(STORAGE_KEY, JSON.stringify(items));
    blockedItemsCache = items;
    clearBlockedIdCache();
    return true;
  } catch (error) {
    return false;
  }
}

function isItemBlocked(item) {
  if (!item || !item.id) return false;

  const blockedIdSet = getBlockedIdSet();
  const itemId = String(item.id);
  const itemIdNum = parseInt(item.id);

  if (blockedIdSet.has(itemId) || blockedIdSet.has(itemIdNum)) {
    return true;
  }

  if (item.mediaType || item.media_type) {
    const mediaType = item.mediaType || item.media_type;
    if (blockedIdSet.has(itemId + "_" + mediaType) || blockedIdSet.has(itemIdNum + "_" + mediaType)) {
      return true;
    }
  }

  return false;
}

function isItemBlockedByGenre(item) {
  if (!item || !item.genre_ids) return false;

  const blockedGenres = getBlockedGenres();
  const blockedGenreIds = new Set(blockedGenres.map(g => g.id));

  return item.genre_ids.some(genreId => blockedGenreIds.has(genreId));
}

function isItemBlockedEnhanced(item) {
  if (isItemBlocked(item)) {
    return true;
  }

  if (isItemBlockedByGenre(item)) {
    return true;
  }

  return false;
}

function filterBlockedItemsEnhanced(items) {
  if (!Array.isArray(items)) return items;

  const blockedIdSet = getBlockedIdSet();
  const blockedGenres = getBlockedGenres();
  const blockedGenreIds = new Set(blockedGenres.map(g => g.id));

  const filtered = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (!item || !item.id) {
      filtered.push(item);
      continue;
    }

    const itemId = String(item.id);
    const itemIdNum = parseInt(item.id);
    if (blockedIdSet.has(itemId) || blockedIdSet.has(itemIdNum)) {
      continue;
    }

    if (item.genre_ids && item.genre_ids.some(genreId => blockedGenreIds.has(genreId))) {
      continue;
    }

    if (item.mediaType || item.media_type) {
      const mediaType = item.mediaType || item.media_type;
      if (blockedIdSet.has(itemId + "_" + mediaType) || blockedIdSet.has(itemIdNum + "_" + mediaType)) {
        continue;
      }
    }

    filtered.push(item);
  }

  return filtered;
}

function addBlockedGenre(genreName, genreId, description = "") {
  const blockedGenres = getBlockedGenres();

  const exists = blockedGenres.some(blocked =>
    blocked.id === genreId || blocked.name === genreName
  );

  if (!exists) {
    blockedGenres.push({
      id: genreId,
      name: genreName,
      description: description || `Block all content of genre "${genreName}"`,
      blocked_date: new Date().toISOString()
    });

    return saveBlockedGenres(blockedGenres);
  }

  return false;
}

function removeBlockedGenre(genreId) {
  const blockedGenres = getBlockedGenres();
  const filtered = blockedGenres.filter(genre => genre.id !== genreId);
  return saveBlockedGenres(filtered);
}


function addBlockedItem(item) {
  const blockedItems = getBlockedItems();

  const exists = blockedItems.some(blocked =>
    blocked.id === String(item.id) && blocked.media_type === item.media_type
  );

  if (!exists) {
    blockedItems.push({
      id: String(item.id),
      media_type: item.media_type,
      title: item.title,
      poster_path: item.poster_path,
      overview: item.overview,
      blocked_date: new Date().toISOString(),
      vote_average: item.vote_average || 0
    });

    return saveBlockedItems(blockedItems);
  }

  return false;
}

function removeBlockedItem(id, mediaType) {
  const blockedItems = getBlockedItems();
  const filtered = blockedItems.filter(item =>
    !(item.id === String(id) && item.media_type === mediaType)
  );

  return saveBlockedItems(filtered);
}

function clearBlockedItems() {
  try {
    Widget.storage.clear();
    clearAllCaches();
    return true;
  } catch (error) {
    return false;
  }
}

// ===============Helper Functions===============
async function fetchTmdbGenres() {
  if (tmdbGenresCache) return tmdbGenresCache;

  const [movieGenres, tvGenres] = await Promise.all([
    Widget.tmdb.get('/genre/movie/list', { params: { language: 'en' } }),
    Widget.tmdb.get('/genre/tv/list', { params: { language: 'en' } })
  ]);

  tmdbGenresCache = {
    movie: movieGenres.genres.reduce((acc, g) => ({ ...acc, [g.id]: g.name }), {}),
    tv: tvGenres.genres.reduce((acc, g) => ({ ...acc, [g.id]: g.name }), {})
  };
  return tmdbGenresCache;
}

function getTmdbGenreTitles(genreIds, mediaType) {
  const genres = tmdbGenresCache?.[mediaType] || {};
  const topThreeIds = genreIds.slice(0, 3);
  return topThreeIds
    .map(id => genres[id]?.trim() || `Unknown Genre(${id})`)
    .filter(Boolean)
    .join('•');
}

function calculatePagination(params) {
  let page = parseInt(params.page) || 1;
  const limit = parseInt(params.limit) || 20;

  if (typeof params.start !== 'undefined') {
    page = Math.floor(parseInt(params.start) / limit) + 1;
  }

  const start = (page - 1) * limit;
  return { page, limit, start };
}

function getBeijingDate() {
  const now = new Date();
  const beijingTime = now.getTime() + (8 * 60 * 60 * 1000);
  const beijingDate = new Date(beijingTime);
  return `${beijingDate.getUTCFullYear()}-${String(beijingDate.getUTCMonth() + 1).padStart(2, '0')}-${String(beijingDate.getUTCDate()).padStart(2, '0')}`;
}

// =============TMDB Functions============
const MIN_VOTE_COUNT = {
  movie: 50,
  tv: 30
};

const POPULARITY_QUALITY_STANDARDS = {
  movie: {
    minVoteCount: 50,
    minVoteAverage: 5.0
  },
  tv: {
    minVoteCount: 10,
    minVoteAverage: 5.0
  }
};

const DOMESTIC_PLATFORMS = ['2007', '1330', '1419', '1605', '1631'];

const DOMESTIC_MIN_VOTE_COUNT = {
  tv: 5
};

const DOMESTIC_PLATFORM_STANDARDS = {
  movie: {
    minVoteCount: 15,
    minVoteAverage: 4.5
  },
  tv: {
    minVoteCount: 5,
    minVoteAverage: 4.5
  }
};

const CN_COUNTRY_CODE = 'CN';
const isDomesticCN = (region) => region === CN_COUNTRY_CODE;

async function fetchTmdbData(api, params) {
  const [data, genres] = await Promise.all([
    Widget.tmdb.get(api, { params: params }),
    fetchTmdbGenres()
  ]);

  const filteredResults = data.results
    .filter((item) => {
      const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
      const sortBy = params.sort_by || '';

      let passesFilter = item.poster_path &&
        item.id &&
        (item.title || item.name) &&
        (item.title || item.name).trim().length > 0 &&
        item.genre_ids &&
        Array.isArray(item.genre_ids) &&
        item.genre_ids.length >= 1;

      if (passesFilter && sortBy === 'vote_average.desc') {
        const isDomestic = DOMESTIC_PLATFORMS.includes(String(params.with_networks));
        const minVoteCount = isDomestic
          ? DOMESTIC_MIN_VOTE_COUNT[mediaType]
          : (MIN_VOTE_COUNT[mediaType] || MIN_VOTE_COUNT.movie);
        passesFilter = passesFilter && (item.vote_count >= minVoteCount);
      }

      return passesFilter;
    })
    .map((item) => {
      const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
      const genreIds = item.genre_ids || [];
      const genreTitle = getTmdbGenreTitles(genreIds, mediaType);

      return {
        id: item.id,
        type: "tmdb",
        title: item.title || item.name,
        description: item.overview,
        releaseDate: item.release_date || item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: mediaType,
        genreTitle: genreTitle,
        genre_ids: genreIds
      };
    });

  return filterBlockedItemsEnhanced(filteredResults);
}

async function loadTmdbTrendingData() {
  try {
    const response = await Widget.http.get("https://for-ward.vercel.app/data/TMDB_Trending.en.json", {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15'
      }
    });
    return response.data;
  } catch (error) {
    try {
      const fallbackResponse = await Widget.http.get("https://for-ward.vercel.app/data/TMDB_Trending.en.json");
      return fallbackResponse.data;
    } catch (fallbackError) {
      throw fallbackError;
    }
  }
}

async function loadTodayHotTV(params) {
  const page = parseInt(params.page) || 1;
  const region = params.sort_by || '';
  const sortBy = 'popularity.desc';
  const isPopularitySort = (s) => s === 'popularity.desc';
  const isDomesticCN = (r) => r === 'CN';

  if (region) {
    const std = isDomesticCN(region) && isPopularitySort(sortBy)
      ? DOMESTIC_PLATFORM_STANDARDS.tv
      : POPULARITY_QUALITY_STANDARDS.tv;

    const discoverParams = {
      language: params.language || 'en',
      page: page,
      with_origin_country: region,
      sort_by: sortBy,
      'vote_count.gte': std.minVoteCount,
      'vote_average.gte': std.minVoteAverage
    };

    const [data, genres] = await Promise.all([
      Widget.tmdb.get('/discover/tv', { params: discoverParams }),
      fetchTmdbGenres()
    ]);

    const items = data.results
      .filter((it) => it.poster_path && it.genre_ids?.length)
      .map((it) => ({
        id: String(it.id),
        type: 'tmdb',
        title: it.name,
        description: it.overview,
        releaseDate: it.first_air_date,
        backdropPath: it.backdrop_path,
        posterPath: it.poster_path,
        rating: it.vote_average,
        mediaType: 'tv',
        genreTitle: getTmdbGenreTitles(it.genre_ids, 'tv'),
        genre_ids: it.genre_ids
      }));

    return filterBlockedItemsEnhanced(items);
  }

  if (page === 1) {
    try {
      const data = await loadTmdbTrendingData();
      const allTv = data.today_tv || [];
      const tvItems = [];
      for (let i = 0; i < allTv.length && tvItems.length < 20; i++) {
        const it = allTv[i];
        if (it.type === 'tv' && it.poster_url && it.genre_ids?.length) {
          tvItems.push({
            id: it.id.toString(),
            type: 'tmdb',
            title: it.title,
            genreTitle: it.genreTitle,
            rating: it.rating,
            description: it.overview,
            releaseDate: it.release_date,
            posterPath: it.poster_url,
            backdropPath: it.title_backdrop,
            mediaType: 'tv',
            genre_ids: it.genre_ids || []
          });
        }
      }
      return filterBlockedItemsEnhanced(tvItems);
    } catch (e) {
    }
  }

  const std = POPULARITY_QUALITY_STANDARDS.tv;
  const fallbackParams = {
    language: params.language || 'en',
    page: page,
    sort_by: sortBy,
    'vote_count.gte': std.minVoteCount,
    'vote_average.gte': std.minVoteAverage
  };

  const [data, genres] = await Promise.all([
    Widget.tmdb.get('/discover/tv', { params: fallbackParams }),
    fetchTmdbGenres()
  ]);

  const items = data.results
    .filter((it) => it.poster_path && it.genre_ids?.length)
    .map((it) => ({
      id: String(it.id),
      type: 'tmdb',
      title: it.name,
      description: it.overview,
      releaseDate: it.first_air_date,
      backdropPath: it.backdrop_path,
      posterPath: it.poster_path,
      rating: it.vote_average,
      mediaType: 'tv',
      genreTitle: getTmdbGenreTitles(it.genre_ids, 'tv'),
      genre_ids: it.genre_ids
    }));

  return filterBlockedItemsEnhanced(items);
}

async function loadTodayHotMovies(params) {
  const page = parseInt(params.page) || 1;
  const region = params.sort_by || '';
  const sortBy = 'popularity.desc';

  const isPopularitySort = (s) => s === 'popularity.desc';
  const isDomesticCN = (r) => r === 'CN';

  if (region) {
    const std = isDomesticCN(region) && isPopularitySort(sortBy)
      ? DOMESTIC_PLATFORM_STANDARDS.movie
      : POPULARITY_QUALITY_STANDARDS.movie;

    const discoverParams = {
      language: params.language || 'en',
      page: page,
      with_origin_country: region,
      sort_by: sortBy,
      'vote_count.gte': std.minVoteCount,
      'vote_average.gte': std.minVoteAverage
    };

    const [data, genres] = await Promise.all([
      Widget.tmdb.get('/discover/movie', { params: discoverParams }),
      fetchTmdbGenres()
    ]);

    const items = data.results
      .filter((it) => it.poster_path && it.genre_ids?.length)
      .map((it) => ({
        id: String(it.id),
        type: 'tmdb',
        title: it.title,
        description: it.overview,
        releaseDate: it.release_date,
        backdropPath: it.backdrop_path,
        posterPath: it.poster_path,
        rating: it.vote_average,
        mediaType: 'movie',
        genreTitle: getTmdbGenreTitles(it.genre_ids, 'movie'),
        genre_ids: it.genre_ids
      }));

    return filterBlockedItemsEnhanced(items);
  }

  if (page === 1) {
    try {
      const data = await loadTmdbTrendingData();
      const allMovies = data.today_movies || [];
      const movieItems = [];
      for (let i = 0; i < allMovies.length && movieItems.length < 20; i++) {
        const it = allMovies[i];
        if (it.type === 'movie' && it.poster_url && it.genre_ids?.length) {
          movieItems.push({
            id: it.id.toString(),
            type: 'tmdb',
            title: it.title,
            genreTitle: it.genreTitle,
            rating: it.rating,
            description: it.overview,
            releaseDate: it.release_date,
            posterPath: it.poster_url,
            backdropPath: it.title_backdrop,
            mediaType: 'movie',
            genre_ids: it.genre_ids || []
          });
        }
      }
      return filterBlockedItemsEnhanced(movieItems);
    } catch (e) {
    }
  }

  const std = POPULARITY_QUALITY_STANDARDS.movie;
  const fallbackParams = {
    language: params.language || 'en',
    page: page,
    sort_by: sortBy,
    'vote_count.gte': std.minVoteCount,
    'vote_average.gte': std.minVoteAverage
  };

  const [data, genres] = await Promise.all([
    Widget.tmdb.get('/discover/movie', { params: fallbackParams }),
    fetchTmdbGenres()
  ]);

  const items = data.results
    .filter((it) => it.poster_path && it.genre_ids?.length)
    .map((it) => ({
      id: String(it.id),
      type: 'tmdb',
      title: it.title,
      description: it.overview,
      releaseDate: it.release_date,
      backdropPath: it.backdrop_path,
      posterPath: it.poster_path,
      rating: it.vote_average,
      mediaType: 'movie',
      genreTitle: getTmdbGenreTitles(it.genre_ids, 'movie'),
      genre_ids: it.genre_ids
    }));

  return filterBlockedItemsEnhanced(items);
}

async function tmdbTopRated(params) {
  const type = params.type || 'movie';
  const api = type === 'movie' ? `movie/top_rated` : `tv/top_rated`;

  const [data, genres] = await Promise.all([
    Widget.tmdb.get(api, { params: params }),
    fetchTmdbGenres()
  ]);

  const filteredResults = data.results
    .filter((item) => {
      const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
      const minVoteCount = MIN_VOTE_COUNT[type] || MIN_VOTE_COUNT.movie;

      return item.poster_path &&
        item.id &&
        (item.title || item.name) &&
        (item.title || item.name).trim().length > 0 &&
        item.genre_ids &&
        Array.isArray(item.genre_ids) &&
        item.genre_ids.length >= 1 &&
        item.vote_count >= minVoteCount;
    })
    .map((item) => {
      const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
      const genreIds = item.genre_ids || [];
      const genreTitle = getTmdbGenreTitles(genreIds, mediaType);

      return {
        id: item.id,
        type: "tmdb",
        title: item.title || item.name,
        description: item.overview,
        releaseDate: item.release_date || item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: mediaType,
        genreTitle: genreTitle,
        genre_ids: genreIds
      };
    });

  return filterBlockedItemsEnhanced(filteredResults);
}

async function tmdbDiscoverByNetwork(params = {}) {
  const api = "discover/tv";
  const beijingDate = getBeijingDate();
  const sortBy = params.sort_by || "first_air_date.desc";

  const discoverParams = {
    language: params.language || 'en',
    page: params.page || 1,
    with_networks: params.with_networks,
    sort_by: sortBy
  };

  if (sortBy === 'vote_average.desc') {
    const isDomestic = DOMESTIC_PLATFORMS.includes(String(params.with_networks));
    const std = isDomestic ? DOMESTIC_MIN_VOTE_COUNT.tv : MIN_VOTE_COUNT.tv;
    discoverParams['vote_count.gte'] = std;
  }

  if (params.air_status === 'released') {
    discoverParams['first_air_date.lte'] = beijingDate;
  } else if (params.air_status === 'upcoming') {
    discoverParams['first_air_date.gte'] = beijingDate;
  }
  if (params.with_genres) {
    discoverParams.with_genres = params.with_genres;
  }

  return await fetchTmdbData(api, discoverParams);
}

async function tmdbCompanies(params = {}) {
  const api = "discover/movie";
  const beijingDate = getBeijingDate();
  const withCompanies = String(params.with_companies || '').trim();
  const sortBy = params.sort_by || "primary_release_date.desc";

  const cleanParams = {
    page: params.page || 1,
    language: params.language || "en",
    sort_by: sortBy,
    include_adult: false,
    include_video: false
  };

  if (sortBy === 'vote_average.desc') {
    cleanParams['vote_count.gte'] = MIN_VOTE_COUNT.movie;
  }

  if (sortBy === 'popularity.desc') {
    cleanParams['vote_count.gte'] = POPULARITY_QUALITY_STANDARDS.movie.minVoteCount;
    cleanParams['vote_average.gte'] = POPULARITY_QUALITY_STANDARDS.movie.minVoteAverage;
  }

  if (sortBy === 'vote_count.desc') {
    cleanParams['vote_average.gte'] = 6.0;
  }

  if (withCompanies) {
    cleanParams.with_companies = withCompanies;
  }
  if (params.air_status === 'released') {
    cleanParams['primary_release_date.lte'] = beijingDate;
  } else if (params.air_status === 'upcoming') {
    cleanParams['primary_release_date.gte'] = beijingDate;
  }
  if (params.with_genres) {
    cleanParams.with_genres = String(params.with_genres).trim();
  }

  return await fetchTmdbData(api, cleanParams);
}

// ===============Search & Block===============
async function searchTMDB(query, language) {
  if (!query || query.trim().length === 0) {
    throw new Error("Search query cannot be empty");
  }

  try {
    const response = await Widget.tmdb.get("/search/multi", {
      params: {
        query: query.trim(),
        language: language || "en",
        page: 1
      }
    });

    if (!response) {
      throw new Error("TMDB API did not respond");
    }

    let results = [];
    if (response.results) {
      results = response.results;
    } else if (response.data && response.data.results) {
      results = response.data.results;
    } else if (Array.isArray(response)) {
      results = response;
    } else {
      throw new Error("Could not parse TMDB response structure");
    }

    const filteredResults = [];
    for (let i = 0; i < results.length && filteredResults.length < 20; i++) {
      const item = results[i];
      if ((item.media_type === "movie" || item.media_type === "tv") &&
        item.id &&
        (item.title || item.name) &&
        item.poster_path) {

        const title = item.title || item.name;
        const releaseDate = item.release_date || item.first_air_date;
        const year = releaseDate ? new Date(releaseDate).getFullYear() : "";

        filteredResults.push({
          id: String(item.id),
          media_type: item.media_type,
          title: title,
          poster_path: item.poster_path,
          overview: item.overview || "",
          vote_average: item.vote_average || 0,
          release_date: releaseDate,
          year: year
        });
      }
    }

    return filteredResults;

  } catch (error) {
    throw new Error("Search failed: " + error.message);
  }
}

async function searchAndBlockByGenre(params) {
  const action = params.action || "search_only";
  const genreName = params.genre_name ? params.genre_name.trim() : '';

  if (!genreName) {
    return [{
      id: "no_genre_name",
      type: "info",
      title: "⚠ Please enter a genre name to block",
      description: "Example: Reality, Entertainment, Documentary, Action, Romance, etc.",
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    }];
  }

  const matchedGenres = [];
  const lowerGenreName = genreName.toLowerCase();

  for (const [name, id] of Object.entries(TMDB_GENRE_MAPPING)) {
    const lowerName = name.toLowerCase();
    if (name.includes(genreName) || genreName.includes(name) ||
      lowerName.includes(lowerGenreName)) {
      matchedGenres.push({ name, id });
    }
  }

  if (matchedGenres.length === 0) {
    const suggestions = Object.keys(TMDB_GENRE_MAPPING).slice(0, 10);
    return [{
      id: "no_genre_match",
      type: "info",
      title: "❓ No matching genre found",
      description: `No genre matching "${genreName}" was found.\n\nSupported genres include:\n${suggestions.join(', ')}`,
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    }];
  }

  const resultItems = [];

  if (action === "search_only") {
    resultItems.push({
      id: "genre_search_summary",
      type: "info",
      title: "ὐd Matching genres found",
      description: `Search for "${genreName}" found ${matchedGenres.length} matching genres:\n\n${matchedGenres.map(g => `• ${g.name} (ID: ${g.id})`).join('\n')}\n\nSelect "Search and Block" mode to add these genres to the blocklist.`,
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    });

    for (const genre of matchedGenres) {
      const blockedGenres = getBlockedGenres();
      const isBlocked = blockedGenres.some(blocked => blocked.id === genre.id);
      const status = isBlocked ? "Ὢb Blocked" : "✅ Blockable";

      resultItems.push({
        id: `genre_detail_${genre.id}`,
        type: "info",
        title: `${status} ${genre.name}`,
        description: `TMDB Genre ID: ${genre.id}\n${isBlocked ? 'This genre is already in the blocklist' : 'All content with this genre can be blocked'}`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      });
    }

  } else if (action === "search_and_block") {
    let blockedCount = 0;
    let alreadyBlockedCount = 0;

    for (const genre of matchedGenres) {
      const success = addBlockedGenre(genre.name, genre.id);
      if (success) {
        blockedCount++;
      } else {
        alreadyBlockedCount++;
      }

      const status = success ? "✅ Blocked" : "Ὢb Exists";
      resultItems.push({
        id: `blocked_genre_${genre.id}`,
        type: "info",
        title: `${status} ${genre.name}`,
        description: `TMDB Genre ID: ${genre.id}\n${success ? 'Added to the genre blocklist' : 'This genre is already in the blocklist'}`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      });
    }

    resultItems.unshift({
      id: "genre_block_summary",
      type: "info",
      title: "Ἲf Genre blocking complete",
      description: `Search for "${genreName}" found ${matchedGenres.length} genres\nBlocked: ${blockedCount} new\nAlready Exists: ${alreadyBlockedCount}\n\nContent with these genres will no longer appear in lists.`,
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    });
  }

  return resultItems;
}

async function searchAndBlock(params) {
  const blockType = params.block_type || "by_name";
  const action = params.action || "search_only";

  if (blockType === "by_genre") {
    return await searchAndBlockByGenre({
      action: action,
      genre_name: params.genre_name
    });
  } else if (blockType === "manual_id") {
    const tmdbId = params.tmdb_id ? params.tmdb_id.trim() : '';
    const mediaType = params.media_type || "movie";

    if (!tmdbId) {
      return [{
        id: "no_id",
        type: "info",
        title: "⚠ Please enter a TMDB ID",
        description: "Enter the TMDB ID to block in the input box above, then run this module again.",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (!/^\d+$/.test(tmdbId)) {
      return [{
        id: "invalid_id",
        type: "error",
        title: "❌ Invalid ID format",
        description: "TMDB ID must be numbers only, e.g.: 550, 1399",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }

    try {
      const endpoint = mediaType === "movie" ? "/movie/" + tmdbId : "/tv/" + tmdbId;

      const response = await Widget.tmdb.get(endpoint, {
        params: { language: "en" }
      });

      let item = null;
      if (response && response.data) {
        item = response.data;
      } else if (response && (response.title || response.name)) {
        item = response;
      } else {
        throw new Error("Could not parse detail response structure");
      }

      const title = item.title || item.name;

      if (!title) {
        return [{
          id: "not_found",
          type: "error",
          title: "❌ Content not found",
          description: "No " + (mediaType === "movie" ? "movie" : "TV show") + " found with ID " + tmdbId,
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }

      const blockItem = {
        id: tmdbId,
        media_type: mediaType,
        title: title,
        poster_path: item.poster_path,
        overview: item.overview,
        vote_average: item.vote_average
      };

      const success = addBlockedItem(blockItem);
      const mediaTypeText = mediaType === "movie" ? "Movie" : "TV Show";
      const ratingText = item.vote_average ? " ⭐" + item.vote_average.toFixed(1) : "";

      return [{
        id: "manual_block_result_" + tmdbId,
        type: "info",
        title: success ? "✅ Blocked successfully" : "ℹ️ Already exists",
        description: success ?
          mediaTypeText + " \"" + title + "\"" + ratingText + " has been added to the blocklist." :
          mediaTypeText + " \"" + title + "\"" + ratingText + " is already in the blocklist.",
        posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
        backdropPath: "",
        rating: item.vote_average || 0,
        mediaType: mediaType
      }];

    } catch (error) {
      return [{
        id: "manual_block_error",
        type: "error",
        title: "❌ Block failed",
        description: "Error message: " + error.message,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }
  } else {
    const query = params.query ? params.query.trim() : '';
    const language = params.language || "en";

    if (!query) {
      return [{
        id: "no_query",
        type: "info",
        title: "⚠ Please enter a search query",
        description: "Enter the movie or series name to search in the input box above, then run this module again.",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    try {
      const searchResults = await searchTMDB(query, language);

      if (searchResults.length === 0) {
        return [{
          id: "no_results",
          type: "info",
          title: "ὐd No matching results found",
          description: "No movies or TV shows related to \"" + query + "\" were found. Please try other keywords.",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      }

      const resultItems = [];

      if (action === "search_only") {
        const blockedItems = getBlockedItems();
        const blockedIds = new Set();
        for (let i = 0; i < blockedItems.length; i++) {
          blockedIds.add(blockedItems[i].id + "_" + blockedItems[i].media_type);
        }

        for (let i = 0; i < searchResults.length; i++) {
          const item = searchResults[i];
          const isBlocked = blockedIds.has(item.id + "_" + item.media_type);
          const mediaTypeText = item.media_type === "movie" ? "Movie" : "TV Show";
          const yearText = item.year ? " (" + item.year + ")" : "";
          const ratingText = item.vote_average ? " ⭐" + item.vote_average.toFixed(1) : "";
          const statusText = isBlocked ? " Ὢb Blocked" : "";

          resultItems.push({
            id: "search_" + item.id + "_" + item.media_type,
            type: "info",
            title: item.title + yearText + statusText,
            description: mediaTypeText + ratingText + " (TMDB ID: " + item.id + ") | " + (item.overview || "No description"),
            posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
            backdropPath: "",
            rating: item.vote_average || 0,
            mediaType: item.media_type
          });
        }

        resultItems.unshift({
          id: "search_summary",
          type: "info",
          title: "ὐd Search Results",
          description: "Search for \"" + query + "\" found " + searchResults.length + " results\n\n" +
            "To block this content, choose \"Search and Block\" mode.",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        });

      } else {
        let blockedCount = 0;
        let alreadyBlockedCount = 0;

        for (let i = 0; i < searchResults.length; i++) {
          const item = searchResults[i];
          const mediaTypeText = item.media_type === "movie" ? "Movie" : "TV Show";
          const yearText = item.year ? " (" + item.year + ")" : "";
          const ratingText = item.vote_average ? " ⭐" + item.vote_average.toFixed(1) : "";

          const blockItem = {
            id: item.id,
            media_type: item.media_type,
            title: item.title,
            poster_path: item.poster_path,
            overview: item.overview,
            vote_average: item.vote_average
          };

          const success = addBlockedItem(blockItem);
          if (success) {
            blockedCount++;
          } else {
            alreadyBlockedCount++;
          }

          const status = success ? "✅ Blocked" : "Ὢb Exists";

          resultItems.push({
            id: "blocked_" + item.id + "_" + item.media_type,
            type: "info",
            title: status + " " + item.title + yearText,
            description: mediaTypeText + ratingText + " (TMDB ID: " + item.id + ") | " + (item.overview || "No description"),
            posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
            backdropPath: "",
            rating: item.vote_average || 0,
            mediaType: item.media_type
          });
        }

        resultItems.unshift({
          id: "block_summary",
          type: "info",
          title: "Ἲf Block operation complete",
          description: "Search for \"" + query + "\" found " + searchResults.length + " results\n" +
            "Blocked: " + blockedCount + " new\n" +
            "Already Exists: " + alreadyBlockedCount + "\n\n" +
            "This content will no longer appear in any TMDB lists.",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        });
      }

      return resultItems;

    } catch (error) {
      return [{
        id: "error",
        type: "error",
        title: "❌ Search failed",
        description: "Error message: " + error.message,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }
  }
}

// =============Blocker Management=============
async function manageBlockedItems(params) {
  const manageType = params.manage_type || "items";
  const action = params.action || "view";

  if (manageType === "genres") {
    if (action === "unblock") {
      const genreId = params.unblock_id ? parseInt(params.unblock_id.trim()) : null;

      if (!genreId) {
        return [{
          id: "no_genre_id",
          type: "info",
          title: "⚠ Please enter the Genre ID to unblock",
          description: "Enter the Genre ID to unblock in the input box above, then run again.",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      }

      const success = removeBlockedGenre(genreId);
      const genreName = REVERSE_GENRE_MAPPING[genreId] || `Genre ID: ${genreId}`;

      return [{
        id: "unblock_genre_result",
        type: "info",
        title: success ? "✅ Unblock successful" : "❌ Operation failed",
        description: success ?
          `Genre "${genreName}" has been removed from the blocklist and will reappear in lists.` :
          `No genre with ID ${genreId} was found, or an error occurred during unblocking.`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (action === "clear") {
      try {
        Widget.storage.remove(GENRE_STORAGE_KEY);
        clearBlockedGenresCache();
        clearBlockedIdCache();
        return [{
          id: "clear_genres_result",
          type: "info",
          title: "✅ Genre blocklist cleared",
          description: "All blocked genres have been removed, and content will reappear in lists.",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      } catch (error) {
        return [{
          id: "clear_genres_error",
          type: "error",
          title: "❌ Clear failed",
          description: "An error occurred while clearing the genre blocklist.",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }
    }

    const blockedGenres = getBlockedGenres();

    if (blockedGenres.length === 0) {
      return [{
        id: "empty_genre_list",
        type: "info",
        title: "Genre blocklist is empty",
        description: "No genres are currently blocked. Use the \"TMDB Search and Block\" function and select \"By Genre\" to add genres to block.",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    const resultItems = [];

    resultItems.push({
      id: "genre_unblock_help",
      type: "info",
      title: "💡 How to Unblock a Genre",
      description: "To unblock a genre, please: 📝 Note the ID of the genre, ⚙️ Select the \"Unblock\" operation, ✏️ Enter the corresponding Genre ID",
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    });

    const sortedGenres = [...blockedGenres].sort((a, b) =>
      new Date(b.blocked_date) - new Date(a.blocked_date)
    );

    for (const genre of sortedGenres) {
      const blockedDate = new Date(genre.blocked_date).toLocaleDateString();

      resultItems.push({
        id: `blocked_genre_${genre.id}`,
        type: "blocked_genre",
        title: `🚫 ${genre.name}`,
        description: `Genre ID: ${genre.id} | Blocked on: ${blockedDate}\n${genre.description}`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "genre",
        genreId: genre.id,
        genreName: genre.name
      });
    }

    return resultItems;
  } else {
    if (action === "unblock") {
      const unblockId = params.unblock_id ? params.unblock_id.trim() : '';
      const mediaType = params.unblock_media_type || "tv";

      if (!unblockId) {
        return [{
          id: "no_unblock_id",
          type: "info",
          title: "⚠ Please enter an ID to unblock",
          description: "Enter the TMDB ID to unblock in the input box above, then run again.",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      }

      if (!/^\d+$/.test(unblockId)) {
        return [{
          id: "invalid_unblock_id",
          type: "error",
          title: "❌ Invalid ID format",
          description: "TMDB ID must be numbers only, e.g.: 2190, 550",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }

      const success = removeBlockedItem(unblockId, mediaType);
      const mediaTypeText = mediaType === "movie" ? "Movie" : "TV Show";

      return [{
        id: "unblock_result",
        type: "info",
        title: success ? "✅ Unblock successful" : "❌ Operation failed",
        description: success ?
          mediaTypeText + " ID " + unblockId + " has been removed from the blocklist and will reappear in lists." :
          "No " + mediaTypeText + " with ID " + unblockId + " was found, or an error occurred during unblocking.",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (action === "clear") {
      const success = clearBlockedItems();
      return [{
        id: "clear_result",
        type: "info",
        title: success ? "✅ Blocklist cleared" : "❌ Clear failed",
        description: success ? "All blocked items have been removed, and Widget storage has been cleared" : "An error occurred while clearing the blocklist",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (action === "export") {
      const blockedItems = getBlockedItems();
      const idList = blockedItems.map(item => item.id).join(',');

      return [{
        id: "export_result",
        type: "info",
        title: "📤 Export Block Settings",
        description: `Current list of blocked IDs (${blockedItems.length}):\n\n${idList || 'None'}`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (action === "import") {
      const importData = params.import_data ? params.import_data.trim() : '';
      if (!importData) {
        return [{
          id: "import_empty",
          type: "info",
          title: "⚠ Please enter import data",
          description: "Enter a list of TMDB IDs to import (comma-separated) in the input box above, then run again.",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      }

      try {
        let cleanedData = importData;

        cleanedData = cleanedData.replace(/['"]/g, '');

        const idArray = cleanedData.split(',');
        const ids = [];
        for (let i = 0; i < idArray.length; i++) {
          const id = idArray[i].trim();
          if (/^\d+$/.test(id)) {
            ids.push(id);
          }
        }

        let importedCount = 0;
        const blockedItems = getBlockedItems();

        for (let i = 0; i < ids.length; i++) {
          const id = ids[i];
          const exists = blockedItems.some(item => item.id === id);
          if (!exists) {
            blockedItems.push({
              id: id,
              media_type: "movie", // Default to movie, as type is unknown
              title: `TMDB ID: ${id}`,
              poster_path: "",
              overview: "Blocked item imported via ID",
              blocked_date: new Date().toISOString(),
              vote_average: 0
            });
            importedCount++;
          }
        }

        const success = saveBlockedItems(blockedItems);

        return [{
          id: "import_result",
          type: "info",
          title: success ? `✅ Import successful` : "❌ Import failed",
          description: success ?
            `Imported ${importedCount} new blocked items, total ${blockedItems.length} blocked items` :
            "An error occurred during import",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      } catch (error) {
        return [{
          id: "import_error",
          type: "error",
          title: "❌ Import failed",
          description: `Error message: ${error.message}`,
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }
    }

    const blockedItems = getBlockedItems();

    if (blockedItems.length === 0) {
      return [{
        id: "empty_list",
        type: "info",
        title: "Blocklist is empty",
        description: "No content is currently blocked. Use the \"TMDB Search and Block\" function to add content to block.",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    const sortedItems = [];
    for (let i = 0; i < blockedItems.length; i++) {
      sortedItems.push(blockedItems[i]);
    }

    sortedItems.sort(function(a, b) {
      return new Date(b.blocked_date) - new Date(a.blocked_date);
    });

    const resultItems = [];

    if (sortedItems.length > 0) {
      resultItems.push({
        id: "unblock_help",
        type: "info",
        title: "💡 How to Unblock",
        description: "To unblock content, please: 📝 Note the TMDB ID, ⚙️ Select the \"Unblock\" operation, ✏️ Enter the corresponding ID and media type",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      });
    }

    for (let i = 0; i < sortedItems.length; i++) {
      const item = sortedItems[i];
      const mediaTypeText = item.media_type === "movie" ? "Movie" : "TV Show";
      const blockedDate = new Date(item.blocked_date).toLocaleDateString();
      const ratingText = item.vote_average ? " ⭐" + item.vote_average.toFixed(1) : "";

      resultItems.push({
        id: "blocked_" + item.id + "_" + item.media_type,
        type: "blocked_item",
        title: "🚫 " + item.title,
        description: mediaTypeText + ratingText + " | TMDB ID: " + item.id + " | Blocked on: " + blockedDate + "\n" + (item.overview || "No description"),
        posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
        backdropPath: "",
        rating: item.vote_average || 0,
        mediaType: item.media_type,
        tmdbId: item.id,
        tmdbMediaType: item.media_type
      });
    }

    return resultItems;
  }
}

async function loadDetail(link) {
  try {
    if (link.startsWith("block://")) {
      const parts = link.replace("block://", "").split("/");
      const [id, mediaType, encodedTitle] = parts;
      const title = decodeURIComponent(encodedTitle);

      const endpoint = mediaType === "movie" ? "/movie/" + id : "/tv/" + id;

      const response = await Widget.tmdb.get(endpoint, {
        params: { language: "en" }
      });

      let item = null;
      if (response && response.data) {
        item = response.data;
      } else if (response && (response.title || response.name)) {
        item = response;
      } else {
        throw new Error("Could not parse detail response structure");
      }
      const blockItem = {
        id: id,
        media_type: mediaType,
        title: item.title || item.name,
        poster_path: item.poster_path,
        overview: item.overview,
        vote_average: item.vote_average
      };

      const success = addBlockedItem(blockItem);
      const mediaTypeText = mediaType === "movie" ? "Movie" : "TV Show";
      const ratingText = item.vote_average ? ` ⭐${item.vote_average.toFixed(1)}` : "";

      return {
        videoUrl: "",
        title: success ? "✅ Blocked successfully" : "ℹ️ Already exists",
        description: success ?
          `${mediaTypeText} "${title}"${ratingText} has been added to the blocklist and will not appear in the app.\n\nData saved to Widget.storage, all lists will automatically filter this content.` :
          `${mediaTypeText} "${title}"${ratingText} is already in the blocklist.`
      };

    } else if (link.startsWith("unblock://")) {
      const parts = link.replace("unblock://", "").split("/");
      const [id, mediaType, encodedTitle] = parts;
      const title = decodeURIComponent(encodedTitle);

      const success = removeBlockedItem(id, mediaType);
      const mediaTypeText = mediaType === "movie" ? "Movie" : "TV Show";

      return {
        videoUrl: "",
        title: success ? "✅ Unblock successful" : "❌ Operation failed",
        description: success ?
          `${mediaTypeText} "${title}" has been removed from the blocklist and will reappear in the app.\n\nWidget.storage updated, all lists will show this content again.` :
          `An error occurred while unblocking ${mediaTypeText} "${title}".`
      };
    }

    return {
      videoUrl: "",
      title: "❌ Invalid Operation",
      description: "Could not recognize the operation type. Please use the blocker management functions."
    };

  } catch (error) {
    return {
      videoUrl: "",
      title: "❌ Operation Failed",
      description: `Error message: ${error.message}`
    };
  }
}
