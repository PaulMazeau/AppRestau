import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Reviews() {
        return (
            <View>
                <Text style={styles.text}> Ceci est la page reviews </Text>
            </View>
        )
    }

const styles = StyleSheet.create({
    text: {
      color: 'white'
    }
  });
