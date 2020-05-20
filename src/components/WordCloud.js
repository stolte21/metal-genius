import React from 'react';
import ReactWordCloud from 'react-wordcloud';

const WordCloud = ({
    title, words
}) => {

    const colors = [
        '#BB86FC',
        '#3C91E6',
        '#30C5FF',
        '#553739'
    ]

    return (
        <ReactWordCloud
            key={title}
            words={words}
            minSize={[500, 300]}
            options={{
                fontSizes: [10, 80],
                colors
            }}
        />
    );
};

export default WordCloud;