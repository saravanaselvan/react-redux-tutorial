const isNotArchived = archiveState => (story) => {
    return archiveState.indexOf(story.objectID) === -1;
}

const getReadableStories = ({ storyState, archiveState }) => {
    console.log(archiveState);
    return storyState.filter(isNotArchived(archiveState));
}

export {
    getReadableStories
};
