import React from 'react'
import {
    SafeAreaView,
    Platform,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/ilustra.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'

export function Welcome() {
    const navigation = useNavigation()

    function handleStart(){
        navigation.navigate("UserIdentification")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie{'\n'}suas plantas de{'\n'}forma fácil
                </Text>

                <Image
                    source={wateringImg}
                    style={styles.img} 
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.6}
                    onPress={handleStart}
                >
                    <Feather name="chevron-right" style={styles.buttonIcon} />
                    
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    wrapper:{
        flex: 1,
        justifyContent: 'space-around', //para dar espaço e nao colar nas bordas
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        paddingHorizontal: Dimensions.get('window').width * 0.04,
    },
    title: {
        fontSize: 28,
        
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    img: {
        height: Dimensions.get('window').width * 0.7,
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 20,
        height: 56,
        width: 56,
    },
    buttonIcon:{
        fontSize: 32,
        color: colors.white
    }
})