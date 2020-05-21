import React from 'react';
import ReactWordCloud from 'react-wordcloud';

const colors = [
    '#BB86FC',
    '#3C91E6',
    '#30C5FF',
    '#553739'
];

const minSize = [500, 300];
const options = {
    fontSizes: [10, 80],
    colors
};

const WordCloud = ({
    title, words
}) => {

    return (
        <ReactWordCloud
            key={title}
            words={words}
            minSize={minSize}
            options={options}
        />
    );
};

export default WordCloud;