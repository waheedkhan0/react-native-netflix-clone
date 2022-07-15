import { Image,Alert,FlatList, Pressable } from 'react-native';
import { View,Text } from '../Themed';
import React from 'react';
import styles from './styles';

interface HomeCategoryProps{
    category:{
        id: string,
        title: string,
        movies:{
            id: string,
            poster: string,
        }[]
    }
}

export default function MovieCategory(props:HomeCategoryProps) {
  
    const {category} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}  lightColor="#000" darkColor="rgb(255,255,255)">{category.title} </Text>
            <FlatList
            data={category.movies}
            key={category.id}
            renderItem = {({item}) => {
              return <Pressable onPress={ ()=> Alert.alert("Movie Details",item.id+" is clicked")}>
                <Image key={item.id} style={styles.image} source={{uri:item.poster}} />
              </Pressable>
            }
                 
            } 
            
            horizontal
            />
            
    </View>
  )
}