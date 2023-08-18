import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";

const Stats = () => {
    return (
        <View className='mx-4 pt-7 '>
            <Text className='uppercase pb-5'> Quick Stats</Text>
            <View className='flex flex-row space-x-10'>
                <View className='bg-[#F2F1F1] rounded-2xl py-4 w-[160px]'>
                    <Text className='pb-3 text-center'>Total Payroll</Text>
                    <Text className='font-semibold text-center'>₦2,293,044,345.05</Text>
                </View>
                <View className='bg-[#F2F1F1] rounded-2xl py-4 w-[160px]'>
                    <Text className='pb-3 text-center'>Total Employee</Text>
                    <Text className='font-semibold text-center'>10,000</Text>
                </View>

            </View>
        </View>
    )
}

export default Stats