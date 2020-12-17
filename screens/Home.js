import React, {useState} from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import { COLORS, icons, SIZES, images, FONTS } from '../constants'
import { restaurantData } from '../Data/RestaurantData'
import { categoryData } from '../Data/CategoryData'
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
    
     const getCategoryNameById = id =>{
        const category  = categories.filter(category => category.id == id)
        if(category.length>0)
            return category[0].name
        return ""
     }

    return (
        <SafeAreaView style={styles.container} >
            <HeaderHome/>
            <Category 
            onSelectCategory={onSelectCategory} 
            selectedCategory={selectedCategory}
            shadow={styles.shadow}
            />
            <RestaurantList
            getCategoryNameById={getCategoryNameById}
            shadow={styles.shadow} />
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
