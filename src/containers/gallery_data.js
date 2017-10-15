let mock_state = {
    title: 'gallery',
    current_state: 'gallery',
    baseAddress: "https://kenley.nyc3.digitaloceanspaces.com/personal-website/",
    placeholder: require('images/placeholder.png'),
    gallery: [
        {
            key: 0,
            title: 'cdc',
            project_dir: 'cdc',
            placeholder: require('images/placeholder.png')
        },
        {
            key: 1,
            title: 'robocar',
            project_dir: 'robocar',
            placeholder: require('images/placeholder.png')
        }
    ],
    cdc: {
        title: 'cdc',
        project_dir: 'cdc',
        length: 19,
        placeholder: require('images/placeholder.png')
    },
    robocar: {
        title: 'robocar',
        project_dir: 'robocar',
        length: 10,
        placeholder: require('images/placeholder.png')
    }
}

export default mock_state;