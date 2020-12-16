import React, {useState} from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import { COLORS, icons, SIZES, images, FONTS } from '../constants'
import { restaurantData, categoryData } from '../Data/RestaurantData'
import {Category, HeaderHome, RestaurantList} from './components'

const Home = () => {


    

    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData)

    const onSelectCategory = category =>{
        let restaurantList = restaurantData.filter(retaurant => retaurant.categories.includes(category.id))
        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }
    

    return (
        <SafeAreaView style={styles.container} >
            <HeaderHome/>
            <Category 
            onSelectCategory={onSelectCategory} 
            selectedCategory={selectedCategory}
            shadow={styles.shadow}
            />
            <RestaurantList shadow={styles.shadow} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : COLORS.lightGray4,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset : {
            width : 0,
            height : 3
        },
        shadowOpacity: 0.1,
        shadowRadius:3,
        elevation: 1
    }
  
})

export default Home
