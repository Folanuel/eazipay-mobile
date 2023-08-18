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

const Actions = () => {
    return (
        <View className='mx-4 pt-5'>
            <Text className='uppercase pb-4'> Quick Actions</Text>

            <View className='rounded-3xl border border-[black]'>
                <View className='flex flex-row space-x-8 items-center px-10 pt-6'>
                    <View>
                        <Image 
                        source={images.paysalaries}
                        // resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Pay Salaries</Text>
                    </View>
                    <View>
                        <Image 
                        source={images.contact}
                        //resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Add Employee</Text>
                    </View>
                    <View>
                        <Image 
                        source={images.payslips}
                        //resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Send Payslips</Text>
                    </View>

                </View>
                <View className='flex flex-row space-x-8 items-center px-10 pt-6'>
                    <View>
                        <Image 
                        source={images.editsalaries}
                        resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Edit Salaries</Text>
                    </View>
                    <View>
                        <Image 
                        source={images.getaloan}
                        resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Get a Loan</Text>
                    </View>
                    <View className='pl-4'>
                        <Image 
                        source={images.transfer}
                        resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Make a Transfer</Text>
                    </View>
                </View>
                <View className='flex flex-row space-x-8 items-center px-10 pt-6 pb-6'>
                    <View>
                        <Image 
                        source={images.airtime}
                        resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Airtime</Text>
                    </View>
                    <View>
                        <Image 
                        source={images.data}
                        resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Data</Text>
                    </View>
                    <View className='pl-6'>
                        <Image 
                        source={images.electricity}
                        resizeMode='cover'            
                        />
                        <Text className='text-center pt-2'>Electricity</Text>
                    </View>
                </View>
                
            </View>
        </View>
    )
}

export default Actions



{/* 
                 */}