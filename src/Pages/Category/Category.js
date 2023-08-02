import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../Shared/Header/NewsSummaryCart/NewsSummaryCart';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>CategoryNews: {categoryNews.length} </h2>
            {
                categoryNews.map(news => <NewsSummaryCart
                        key={news.id}
                        news={news}
                    ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Category;