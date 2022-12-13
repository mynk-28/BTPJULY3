import axios from "axios";
import { useEffect, useState } from "react"
import { Carousel, CarouselItem } from 'react-bootstrap'

const NoticeCarousel = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/notices')
            .then(res => setNotices(res.data))
            .catch(err => setNotices([]));
    }, []);

    return (
        <Carousel variant="dark">
            {notices.map(notice => (
                <CarouselItem key={notice._id}>
                    <div style={{ height: '200px', margin: '0px 100px' }} >
                        <h4>{notice.title}</h4>
                        <caption>{notice.user.name}</caption>
                        <p>{notice.body}</p>
                    </div>
                </CarouselItem>
            ))}
        </Carousel>
    );
}

export default NoticeCarousel;