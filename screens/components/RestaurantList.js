import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image  } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import {restaurantData} from '../../Data/RestaurantData'

const RestaurantList = ({shadow}) => {

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    marginBottom : SIZES.padding * 2 
                }}
            >
                <View style={{marginBottom : SIZES.padding}}>
                    <View>
                        <Image
                            source={item.photo}
                            resizeMode='cover'
                            style={{
                                width : "100%",
                                height : 200,
                                borderRadius : SIZES.radius}}
                        />
                    </View>
                    <View
                        style={{
                            position : 'absolute',
                            bottom:0,
                            height:50,
                            width: SIZES.width *0.35,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius : SIZES.radius,
                            alignItems : "center",
                            justifyContent : "center",
                            ...shadow
                        }}
                    >
                        <Text style={{...FONTS.h4}} > {item.duration} </Text>
                    </View>
                </View>
                {/* Restaurant info */}
                <Text style={{ ...FONTS.body2}} > {item.name} </Text>
                {/* rating */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection : "row"
                    }}
                >

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={restaurantData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal : SIZES.padding * 2,
                paddingBottom : 30
            }}
        />
    )
}

export default RestaurantList
