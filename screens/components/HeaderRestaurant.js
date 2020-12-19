import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {  } from 'react-native-gesture-handler'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const HeaderRestaurant = ({navigation, restaurant}) => {
    return (
        <View
            style={{flexDirection : 'row',paddingTop: 10}}
        >
            <TouchableOpacity
                style={{
                    width : 50,
                    paddingLeft : SIZES.padding *2,
                    justifyContent : 'center'
                }}
                onPress={()=>navigation.goBack()}
            >
                <Image 
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30
                    }}
                />
            </TouchableOpacity>
            
            {/* restaurant name Section */}
            <View
                style={{
                    flex: 1,
                    alignItems : 'center',
                    justifyContent: "center"
                }}
            >
                <View style={{
                    height:50,
                    alignItems : 'center',
                    justifyContent : "center",
                    paddingHorizontal: SIZES.padding *3,
                    borderRadius : SIZES.radius,
                    backgroundColor : COLORS.lightGray3
                }} >
                    <Text
                        style={ {...FONTS.h3}}
                    >
                        {restaurant?.name}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={{
                    width:50,
                    paddingRight : SIZES.padding *2,
                    justifyContent : 'center'
                }}
            >
                <Image 
                    source={icons.list}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderRestaurant
