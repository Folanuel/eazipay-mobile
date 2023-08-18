import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { images } from '../../constants'


const Wallet = () => {
    return (
        <View className='bg-[#11453B] px-8 mx-4 rounded-3xl h-[192px] space-y-10 pb-2'>
            <Text className='text-white pt-4 text-lg'>Wallet Balance</Text>
            <View className='flex flex-row space-x-28'>
                <Text className='text-2xl text-white font-extrabold'>₦15,067,789.00</Text>
                <Image 
                source={images.eye}
                resizeMode='cover'      
                className=''
                />                
            </View>
            <TouchableOpacity className='rounded-full bg-[#D9EBCD] p-2'>
                <Text className='text-center'>Fund Wallet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Wallet