import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import FreeActivities from '../FreeActivities/FreeActivities';
import OurGoals from '../OurGoals/OurGoals';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <FreeActivities></FreeActivities>
            <OurGoals></OurGoals>
        </div>
    );
};

export default Home;