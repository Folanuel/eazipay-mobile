import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { images } from '../../constants'

const Header = () => {
    return (
        <View className="flex-row justify-between items-center p-4 bg-white">
        <TouchableOpacity className="p-2">
            <Image 
            source={images.profile}
            resizeMode='cover'            
            />
        </TouchableOpacity>
        <Text className="text-black text-lg font-bold">Hello Wasiu</Text>
        <TouchableOpacity className="p-2">
            <Image 
            source={images.bell}
            resizeMode='cover'            
            />
        </TouchableOpacity>
        </View>
    );
};

export default Header;
