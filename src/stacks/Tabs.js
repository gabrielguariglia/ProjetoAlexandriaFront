import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()
import Perfil from '../screens/Perfil'
import Livros from '../screens/Livros'
import themes from '../themes'

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: themes.padrao.colors.brand.amarelo,
                tabBarInactiveTintColor: themes.padrao.colors.neutral.neutral_100,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: themes.padrao.colors.brand.branca,
                    borderTopColor: themes.padrao.colors.neutral.neutral_0,
                    paddingTop: 4,
                    height: 60
                }
            }} >
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={'account'}
                            color={focused ? themes.padrao.colors.brand.amarelo
                                : themes.padrao.colors.neutral.neutral_60}
                            size={35} />
                    )
                }} />
            <Tab.Screen name="Livros" component={Livros}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name={'book'}
                            color={focused ? themes.padrao.colors.brand.amarelo
                                : themes.padrao.colors.neutral.neutral_60}
                            size={35} />
                    )
                }} />

        </Tab.Navigator>
    )

} 