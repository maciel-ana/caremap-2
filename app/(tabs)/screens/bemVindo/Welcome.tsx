import { Pressable, Text, StyleSheet, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>
          Care
          <Text style={styles.map}>Map</Text>
        </Text>
      <Image 
        source={require('../../../../assets/images/doctors.png')}
        style={styles.image}
      />
        <View style={styles.circle}>
          <Text style={styles.textWelcome}>
            Utilize nossa ferramenta de{'\n'}
            localização e tenha acesso a{'\n'}
            informações detalhadas em{'\n'}
            poucos cliques.
          </Text>
        <Pressable style={styles.text}>
            <Link href="./screens/Welcome">
                <Text >COMEÇAR</Text>
            </Link>
        </Pressable>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#619C95',
        fontFamily: 'Inter',
      },
      title: {
        alignItems: 'center',
        paddingTop: '20%',
        paddingVertical: 8,
        color: '#226752',
        fontSize: 30,
        fontWeight: 'bold',
      },
      map: {
        color: '#ffffff',
      },
      image: {
        position: 'absolute',
        width: '50%',
        height: '30%',
        marginTop: '50%',
        zIndex: 1
      },
      circle: {
        width: 320, 
        height: 320,
        borderRadius: 200, 
        backgroundColor: '#ffffff',
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: '55%', 
      },
      textWelcome: {
        color: '#000000',
        fontSize: 19,
        textAlign: 'center',
        paddingTop: '16%',
        fontWeight: '300',
      },
      text: {
        borderWidth: 1,
        borderColor: '#226752', 
        borderRadius: 20, 
        paddingVertical: 10, 
        paddingHorizontal: 30, 
        backgroundColor: '#fff', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2, 
        marginTop: '10%'
      },
})