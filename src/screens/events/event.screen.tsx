import { Button } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import React, { useEffect } from "react";
import EventCard from "../../components/event.card.component";
import { IEvent } from "../../entities/event.entity";
import { IFeed } from "../../entities/feed.entity";
import feedItems from "../feed/feed.items";

const Event = () => {
    const [eventTitle, setEventTitle] = React.useState<String>("Default Title");
    const [events, setEvents] = React.useState<IEvent[]>([]);
    

    useEffect(() => {
        fetchEvents();
    }, [eventTitle])

    

    const fetchEvents = () => {
        console.log("Fetch Events")
        axios.get("http://localhost:8080/evesync/api/v1/events")
            .then((response: AxiosResponse<IEvent[]>) => {
                console.log("Events Data:::", response.data);
                setEvents(response.data);
            })
    }

    return (
        <React.Fragment>
            {
                events.map((event: IEvent, index: number) =>
                    <EventCard
                        key={event.id}
                        id={event.id}
                        description={event.description}
                        img={event.img}
                        location={event.location}
                        type={event.type}
                        title={event.title}
                    />
                )
            }
        <Button onClick={()=>setEventTitle("Updated Title")}>Click Me</Button>
        <span>{eventTitle}</span>
        </React.Fragment>
    );
}
export default Event;