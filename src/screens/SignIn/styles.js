import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #9027E8;
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #000;
`
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-left: 5px;
` 