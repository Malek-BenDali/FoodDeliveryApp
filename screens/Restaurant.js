import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Animated } from 'react-native'
import {icons, COLORS, SIZES, FONT} from '../constants'
import { HeaderRestaurant, FoodInfo, CreateOrder } from './components'

const Restaurant = (props) => {

    const [restaurant, setrestaurant] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)
    useEffect(() => {
        let {item, currentLocation} = props.route.params;

        setrestaurant(item),
        setCurrentLocation(currentLocation)
    }, [])

    return (
        <SafeAreaView
            style={style.container}
        >
            <HeaderRestaurant 
                restaurant={restaurant}
                {...props}
            />
            <FoodInfo 
                restaurant={restaurant}
            />
            <CreateOrder/>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Restaurant
