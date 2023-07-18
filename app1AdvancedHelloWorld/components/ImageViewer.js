import { Image, StyleSheet, View } from "react-native";
const placeHolder = require('../assets/images/high.jpg')

export default function ImageViewer() {
    return (
        <View style={styles.ImageContainer}>
           <Image style={styles.image} source={placeHolder}></Image>
        </View>
    )
}

const styles =  StyleSheet.create({
    ImageContainer:{
        paddingTop:50,
       justifyContent:'center',
       alignItems:"center"
    },
    image:{
        width:300,
        height:250
    }
 
})
