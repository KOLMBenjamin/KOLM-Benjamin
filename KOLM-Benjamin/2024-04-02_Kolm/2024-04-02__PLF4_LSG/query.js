const { PrismaClient } = require('@prisma-client-js');
const prisma = new PrismaClient();

async function getWatchlistsForUser(userId) {
    try {
        const user = await prisma.benutzer.findUnique({
            where: { id: userId },
            include: { watchLists: true },
        });

        if (!user) {
            throw new Error(`Benutzer mit ID ${userId} nicht gefunden.`);
        }

        return user.watchLists.map((watchlist) => ({
            id: watchlist.id,
            name: watchlist.name,
            createdAt: watchlist.createdAt,
        }));
    } catch (error) {
        throw new Error(`Fehler beim Abrufen der Watchlists: ${error.message}`);
    }
}

async function getTracksInWatchlist(watchlistId) {
    try {
        const watchlist = await prisma.watchlist.findUnique({
            where: { id: watchlistId },
            include: { tracks: true },
        });

        if (!watchlist) {
            throw new Error(`Watchlist mit ID ${watchlistId} nicht gefunden.`);
        }

        return watchlist.tracks.map((track) => ({
            id: track.id,
            name: track.name,
            duration: track.duration,
            genre: track.genre,
            artist: track.artist,
        }));
    } catch (error) {
        throw new Error(`Fehler beim Abrufen der Tracks: ${error.message}`);
    }
}


async function exampleQueries() {
    try {
        const userId = 1; 
        const watchlistsForUser = await getWatchlistsForUser(userId);
        console.log('Watchlists für Benutzer:', watchlistsForUser);

        const watchlistId = 1; 
        const tracksInWatchlist = await getTracksInWatchlist(watchlistId);
        console.log('Tracks in Watchlist:', tracksInWatchlist);
    } catch (error) {
        console.error('Fehler:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

async function exampleQueries() {
    try {
        const trackName = 'Track Name'; 
        const watchlistsContainingTrack =getWatchlistsContainingTrack(trackName);
        console.log('Watchlists containing track:', watchlistsContainingTrack);

        const usersWithTrackOnWatchlist = await getUsersWithTrackOnWatchlist(trackName);
        console.log('Users with track on watchlist:', usersWithTrackOnWatchlist);
    } catch (error) {
        console.error('Fehler:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

exampleQueries();
exampleQueries();

