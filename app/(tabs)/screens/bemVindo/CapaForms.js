// // app/components/PageSplashScreen.js
// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const PageSplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     // Simula um carregamento de 3 segundos
//     const timer = setTimeout(() => {
//       navigation.replace('Forms'); // Redireciona para a página específica
//     }, 3000);

//     // Limpa o timer se o componente for desmontado
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//         <Text style={styles.title}>
//             Care
//         <Text style={styles.map}>Map</Text>
//         </Text>
//         <View>
//             <Text style={styles.form}>Formulário</Text>
//         </View>

//         <View>
//             <View style={styles.circle}></View>
//             <Image 
//             source={require('../../../assets/images/doutora.png')}
//             style={styles.image}
//             />
//             <View style={styles.circle2}></View>
//         </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       textAlign: 'center',
//       alignItems: 'center',
//       backgroundColor: '#ffffff',  
//       fontFamily: 'Inter',
//     },
//     title: {
//         alignItems: 'center',
//         textAlign: 'center',
//         paddingTop: '20%',
//         color: '#226752',
//         fontSize: 43,
//         fontWeight: 'bold',
//     },
//     map: {
//         color: '#000',
//     },
//     form: {
//         textAlign: 'center',
//         color: '#619C95',
//         fontWeight: 200,
//         paddingTop: '-5%',
//         fontSize: 42,
//         letterSpacing: 2
//     },
//     circle: {
//         alignItems: 'center', 
//         justifyContent: 'center',
//         width: 380, 
//         height: 380,
//         borderRadius: '200%', 
//         backgroundColor: '#619C95',
//         marginTop: '10%', 
//     },
//     circle2: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 250,
//         height: 250,
//         borderRadius: '200%',
//         backgroundColor: '#DCEAE6',
//         marginTop: '-40%',
//         margin: 'auto',
//     },
//     image: {
//         position: 'absolute',
//         width: '85%',
//         height: '70%',
//         marginTop: '15%',
//         zIndex: 1
//       },
// });

// export default PageSplashScreen;
