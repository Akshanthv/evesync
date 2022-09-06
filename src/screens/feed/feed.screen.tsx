import React from 'react'
import Card from '../../components/card.component';
import { IFeed } from '../../entities/feed.entity';

const Feed = () => {

    const feed: IFeed[] = [
        {
            title: "Call me by your name",
            description: "Italain Movie"
        },
        {
            title: "Interstellar",
            description: "Space Movie"
        },
        {
            title: "Batman: Dark Knight",
            description: "Superhero Movie"
        }
    ]

    return (
        <React.Fragment>
            <span>Feed Screen</span>
            {
                feed.map((feedItem) =>
                    <Card
                        title={feedItem.title}
                        description={feedItem.description}
                    />)
            }
        </React.Fragment>
    );
}

export default Feed;