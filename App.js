import React ,{useState} from 'react'

import {View,Text,StyleSheet,Image,TextInput, Button,ActivityIndicator} from 'react-native'
import Constants from 'expo-constants'


function App(){
  const [Itext1,setItext1] = useState("");
  const [Itext2,setItext2] = useState("");
  const [loading,setloading] = useState(false);
  if(loading){
    return (
      <View style={{alignItems:"center"}}>
      <Text>calculating love ...</Text>
      <ActivityIndicator size={40} color="green" />
      </View>
    )
  }

  const CalculateLove = ()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
      alert(Math.floor(Math.random()*100)+"%")
    },2000)
  }
  return(
    <View>
    <Text>   </Text>
    <Text>Love Calculator</Text>
    <TextInput
    placeholder="type  name of person 1"
    value={Itext1}
    style={{height:50,borderwidth:2}}
    onChangeText={(text)=>{setItext1(text)
    }} 
    />
    <TextInput
    placeholder="type a name of person 2"
    value={Itext2}
    style={{height:50,borderwidth:2}}
    onChangeText={(text)=>{setItext2(text)
    }} 
    />
   
    <Button
    title="press me"
    onPress={() => {
      CalculateLove()
    }}
    />
    </View>
  ) 
}


export default App 