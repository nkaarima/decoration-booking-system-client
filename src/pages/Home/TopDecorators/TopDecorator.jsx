import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../Loading';
import TopDecoratorCard from './TopDecoratorCard';
import decorator1Img from '../../../assets/decorator1.avif'
import decorator2Img from '../../../assets/decorator2.jpg'
import decorator3Img from '../../../assets/decorator3.jpg'

const TopDecorator = () => {

    const axiosSecure=useAxiosSecure();

    const images= [decorator1Img,decorator2Img,decorator3Img];

    const {data : allDecorators =[], isLoading} = useQuery({
        queryKey:['topDecorators'],
        queryFn: async () => {
            const result = await axiosSecure.get('/topDecorators')
            return result.data
        }
    })

    if(isLoading)
    {
        return <Loading></Loading>
    }

    const decorators= allDecorators.map((decorator,index) => ({...decorator, image: images[index]}))
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-large text-center mb-6">Top Decorators</h1>
            <div className="grid grid-cols-3">
                {decorators.map(decorator => <TopDecoratorCard key={decorator._id} decorator={decorator}></TopDecoratorCard> )}
            </div>
        </div>
    );
};

export default TopDecorator;