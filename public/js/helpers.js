window.helpers = (function () {
    function newAttraction(attrs = {}) {
        const attraction = {
            attractionId: uuid.v4(),
            attractionName: attrs.attractionName || 'Attraction Name',
            attractionDescription: attrs.attractionDescription || 'Attraction Description',
            attractionUrl: attrs.attractionUrl  || 'Attraction Website',
            attractionImageUrl: attrs.attractionImageUrl || 'Attraction Logo',
            attractionVoteCount: 0,
            attractionLastVoteAvatarUrl: 'images/avatars/neutral.png',
            attractionLastVoteName: 'No Votes Yet',
        };
        return attraction;
    }

    return {
        newAttraction,
    };
}());