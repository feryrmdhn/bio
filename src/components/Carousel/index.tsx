import { FC } from 'react';
import { Pagination, } from 'swiper';
import '../../assets/style/index.css'
import { JobDetails } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    data: Array<JobDetails>
}

const Carousel: FC<Props> = ({ data }) => {
    return (
        <>
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                grabCursor
                pagination={{ clickable: true }}
                style={{ zIndex: 0, borderRadius: '6px' }}
            >
                {data.map((item, index) => (
                    <div key={index}>
                        {item.image?.map((list, i) => (
                            <SwiperSlide key={i}>
                                {list}
                            </SwiperSlide>
                        ))}
                    </div>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel;