import * as React from 'react';
import type{PropsWithChildren} from 'react'
import { View,Text,StyleSheet } from 'react-native';
type CurrencryButtonProps=PropsWithChildren<{
    name:String;
    flag:string;

}>


const CurrencryButton = (props:CurrencryButtonProps) => {
        return(
            <View style={styles.buttoncontainer}>
                <Text style={styles.flag}>{props.flag}</Text>
                <Text style={styles.country}>{props.name}</Text>

            </View>
        )
 }
 const styles=StyleSheet.create({
    buttoncontainer:{
        alignItems:'center'
    },
    flag:{
        fontSize:28,
        color:'#000',
        fontWeight:'bold',
        marginBottom:4
    },
    country:{
        fontSize:16,
        color:'#990',
        fontWeight:'bold',
    }
 })

export default CurrencryButton