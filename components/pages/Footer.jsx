import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { images } from '../../constants'

const Footer = () => {
    return (
        
        <View className=' flex flex-row pb-5 mt-8 space-x-10 mx-6 border border-gray-100 border-t-1 border-r-0 border-l-0 border-b-0 shadow-black'>
            <View>
                <Image 
                source={images.home}
                // resizeMode='cover'            
                />
                <Text className='text-center'>Home</Text>
            </View>    
            <View>
                <Image 
                source={images.employee}
                // resizeMode='cover'            
                />
                <Text className='text-center'>Employee</Text>
            </View>    
            <View>
                <Image 
                source={images.payroll}
                // resizeMode='cover'            
                />
                <Text className='text-center pt-1'>Payroll</Text>
            </View>    
            <View>
                <Image 
                source={images.frameloans}
                // resizeMode='cover'            
                />
                <Text className='text-center'>Loans</Text>
            </View>    
            <View>
                <Image 
                source={images.more}
                // resizeMode='cover'            
                />
                <Text className='text-center'>More</Text>
            </View>    
        </View>
        
    )
}

export default Footer