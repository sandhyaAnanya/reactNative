import { StyleSheet, Text, View } from "react-native"

export default function TextViewer({data}){
   return(
    <View style={styles.textContainer}>
       <Text style={{fontSize:20, fontWeight:'bold'}}>Hello can u see this text</Text>
       <Text style={{fontSize:10}}>{data} </Text>
    </View>
   )
}
const styles = StyleSheet.create({
     textContainer:{
           justifyContent:'center',
     }
})
